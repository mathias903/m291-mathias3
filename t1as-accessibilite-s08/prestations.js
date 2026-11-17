// T1AS : le catalogue des prestations, chargé depuis data.json avec fetch.

const conteneur = document.getElementById("liste-cartes");
const zoneEtat = document.getElementById("etat");

// La pile de toutes les fiches. Elle est vide tant que data.json n'est pas arrivé.
let tousLesLieux = [];

// Écrit le prix comme en Suisse : « CHF 90.– »
function ecrirePrix(prestation) {
  if (prestation.prix === 0 && prestation.unite === "") {
    return "Prix sur demande";
  }
  if (prestation.prix === 0) {
    return "Inclus " + prestation.unite.replace("inclus ", "");
  }
  return "CHF " + prestation.prix + ".– " + prestation.unite;
}

// Montre une carte par fiche de la liste qu'on lui donne.
// Elle efface d'abord les cartes déjà affichées.
function afficherLieux(liste) {
  conteneur.textContent = "";

  for (const lieu of liste) {
    const carte = document.createElement("article");
    carte.className = "prestation-card";

    const service = document.createElement("span");
    service.className = "service-tag";
    service.textContent = lieu.service;

    const titre = document.createElement("h3");
    titre.textContent = lieu.nom;

    const description = document.createElement("p");
    description.textContent = lieu.description;

    const infos = document.createElement("ul");
    infos.className = "prestation-infos";

    const prix = document.createElement("li");
    prix.className = "prestation-prix";
    prix.textContent = ecrirePrix(lieu);

    const delai = document.createElement("li");
    delai.textContent = "Délai : " + lieu.delai;

    const lieuIntervention = document.createElement("li");
    if (lieu.aDistance) {
      lieuIntervention.className = "badge-intervention a-distance";
      lieuIntervention.textContent = "À distance";
    } else {
      lieuIntervention.className = "badge-intervention sur-place";
      lieuIntervention.textContent = "Sur place";
    }

    infos.append(prix, delai, lieuIntervention);
    carte.append(service, titre, description, infos);
    conteneur.append(carte);
  }
}

zoneEtat.textContent = "Chargement des prestations…";

fetch("data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Fichier introuvable : code " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    zoneEtat.textContent = "";
    // Du moins cher au plus cher
    tousLesLieux = donnees.sort(function (a, b) {
      return a.prix - b.prix;
    });
    if (tousLesLieux.length === 0) {
      zoneEtat.textContent = "Aucune prestation pour le moment.";
      return;
    }
    afficherLieux(tousLesLieux);
  })
  .catch(function (erreur) {
    console.error(erreur);
    zoneEtat.textContent = "Impossible de charger les prestations. Rechargez la page dans un moment.";
  });

// ----- Semaine 12 : la recherche et le filtre « Faisable à distance » -----

const champRecherche = document.getElementById("recherche");
const boutonDistance = document.getElementById("filtre-distance");
let seulementADistance = false;

boutonDistance.addEventListener("click", function () {
  seulementADistance = !seulementADistance;
  boutonDistance.setAttribute("aria-pressed", seulementADistance);
  appliquerFiltres();
});

function appliquerFiltres() {
  const texte = champRecherche.value.trim().toLowerCase();

  const resultats = tousLesLieux.filter(function (lieu) {
    const texteOk = lieu.nom.toLowerCase().includes(texte)
      || lieu.service.toLowerCase().includes(texte);
    const distanceOk = seulementADistance === false || lieu.aDistance === true;
    return texteOk && distanceOk;
  });

  afficherLieux(resultats);

  const aucunResultat = document.getElementById("aucun-resultat");
  if (seulementADistance) {
    aucunResultat.textContent = "Aucune prestation à distance ne correspond à votre recherche. Enlevez le filtre « Faisable à distance » pour voir aussi les interventions sur place.";
  } else {
    aucunResultat.textContent = "Aucune prestation ne correspond à votre recherche. Essayez un service : Maintenance, Cloud, Téléphonie ou Gestion de parc.";
  }
  aucunResultat.hidden = resultats.length > 0;
}

champRecherche.addEventListener("input", function () {
  appliquerFiltres();
});

// Semaine 14 : le bouton à icône qui vide la recherche
document.getElementById("effacer").addEventListener("click", function () {
  champRecherche.value = "";
  appliquerFiltres();
  champRecherche.focus();
});

// ----- Semaine 12 : le formulaire « Une prestation manque ? » -----

const formulaire = document.getElementById("demande");

formulaire.addEventListener("submit", function (event) {
  event.preventDefault();
  const donnees = new FormData(formulaire);
  const nom = donnees.get("nom").trim();
  const service = donnees.get("service");
  const erreurs = [];

  if (nom.length < 5) {
    erreurs.push("Décrivez la prestation en au moins 5 caractères.");
  }
  if (service === "") {
    erreurs.push("Choisissez le service concerné.");
  }

  const zoneErreurs = document.getElementById("erreurs");
  if (erreurs.length > 0) {
    zoneErreurs.textContent = "Erreur : " + erreurs.join(" ");
    return;
  }
  zoneErreurs.textContent = "";

  tousLesLieux.unshift({
    id: tousLesLieux.length + 1,
    nom: nom,
    service: service,
    description: "Prestation proposée par un visiteur. T1AS vous recontacte avec un prix.",
    aDistance: false,
    prix: 0,
    unite: "",
    delai: "à confirmer"
  });

  // On enlève la recherche et le filtre, pour que la nouvelle carte se voie en premier
  champRecherche.value = "";
  seulementADistance = false;
  boutonDistance.setAttribute("aria-pressed", "false");
  appliquerFiltres();
  formulaire.reset();
});
