// T1AS : les cartes de services viennent de data.json, chargées avec fetch.

const conteneur = document.getElementById("liste-cartes");
const zoneEtat = document.getElementById("etat");

// La pile de toutes les fiches. Elle est vide tant que data.json n'est pas arrivé.
let tousLesLieux = [];

// Les dessins des icônes, rangés par le nom écrit dans l'étiquette "icone".
const icones = {
  outils: [["path", { d: "M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" }]],
  nuage: [["path", { d: "M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" }]],
  telephone: [["path", { d: "M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" }]],
  ecran: [["rect", { x: "2", y: "3", width: "20", height: "14", rx: "2" }], ["path", { d: "M8 21h8M12 17v4" }]]
};

// Fabrique le petit dessin SVG d'une carte, avec createElementNS.
function creerIcone(nom) {
  const ns = "http://www.w3.org/2000/svg";
  const svg = document.createElementNS(ns, "svg");
  svg.setAttribute("aria-hidden", "true");
  svg.setAttribute("focusable", "false");
  svg.setAttribute("viewBox", "0 0 24 24");
  svg.setAttribute("fill", "none");
  svg.setAttribute("stroke", "currentColor");
  svg.setAttribute("stroke-width", "2");

  const formes = icones[nom] || icones.ecran;
  for (const [balise, attributs] of formes) {
    const forme = document.createElementNS(ns, balise);
    for (const cle in attributs) {
      forme.setAttribute(cle, attributs[cle]);
    }
    svg.append(forme);
  }
  return svg;
}

// Montre une carte par fiche de la liste qu'on lui donne.
// Elle efface d'abord les cartes déjà affichées.
function afficherLieux(liste) {
  conteneur.textContent = "";

  for (const lieu of liste) {
    const carte = document.createElement("div");
    carte.className = "service-card";

    const zoneIcone = document.createElement("div");
    zoneIcone.className = "service-icon";
    zoneIcone.append(creerIcone(lieu.icone));

    const titre = document.createElement("h3");
    titre.textContent = lieu.service;

    const description = document.createElement("p");
    description.textContent = lieu.description;

    const lien = document.createElement("a");
    lien.href = lieu.lien;
    lien.className = "service-link";
    lien.textContent = "En savoir plus";

    const texteCache = document.createElement("span");
    texteCache.className = "sr-only";
    texteCache.textContent = " sur " + lieu.service;

    const fleche = document.createElement("span");
    fleche.setAttribute("aria-hidden", "true");
    fleche.textContent = "→";

    lien.append(texteCache, " ", fleche);
    carte.append(zoneIcone, titre, description, lien);
    conteneur.append(carte);
  }
}

// ----- Votre code de la semaine 11 commence ici -----

zoneEtat.textContent = "Chargement des services…";

fetch("data.json")
  .then(function (reponse) {
    if (!reponse.ok) {
      throw new Error("Fichier introuvable : code " + reponse.status);
    }
    return reponse.json();
  })
  .then(function (donnees) {
    zoneEtat.textContent = "";
    tousLesLieux = donnees;
    if (tousLesLieux.length === 0) {
      zoneEtat.textContent = "Aucun service pour le moment.";
      return;
    }
    afficherLieux(tousLesLieux);
  })
  .catch(function (erreur) {
    console.error(erreur);
    zoneEtat.textContent = "Impossible de charger les services. Rechargez la page dans un moment.";
  });
