# Journal de bord · Site T1AS

Projet : site de T1AS, prestataire informatique fictif pour les PME (La Tour-de-Peilz)
Auteur : Mathias Wicht, SM-C3A, CPNV
Module : ICT 291
Équipe fictive de l'entreprise : Mathias W. (fondateur), Samuel P., Rayane Y.

---

## 22 septembre 2026 · Création du site

- Création des 5 pages du site : Accueil, Services, À propos, Contact, Mentions légales
- Une feuille de style commune (`css/style.css`) et un script commun (`js/script.js`)
- Couleurs de la marque : bleu et gris, police Inter
- Header fixe avec menu burger sur mobile, hero, grille des 4 services, avantages, avis clients, FAQ, footer
- Ajout du logo T1AS et de la favicon (`assets/`)
- Réalisation de 3 wireframes desktop (Accueil, Services, Contact) pour la documentation

## 6 octobre 2026 · Maquettes

- 3 propositions de page d'accueil : classique, moderne avec un visuel tableau de bord, version sombre
- Choix de garder la direction claire bleu et gris du site

## 27 octobre 2026 · Accessibilité (semaine 8, WCAG 2.2 AA)

- Sauvegarde de la version d'origine avant les corrections
- Contrastes corrigés sur les textes gris, les petits textes du hero, les prix et les bordures des champs
- Lien « Aller au contenu principal » et contour de focus visible sur tous les éléments cliquables
- Menu mobile utilisable au clavier (`aria-expanded`, touche Échap, retour du focus)
- Cibles tactiles d'au moins 48 × 48 px
- Icônes décoratives cachées aux lecteurs d'écran, liens « En savoir plus » précisés, étoiles lues « Note de 5 sur 5 »
- Structure corrigée : balise `<main>`, `aria-current`, ordre des titres, tableau des horaires avec `<caption>`
- Formulaire : message d'erreur sous chaque champ, focus sur le premier champ en erreur, `autocomplete`
- Animations coupées si l'utilisateur a choisi de réduire les animations
- Test avec axe-core sur les 5 pages, en desktop et mobile : 0 erreur
- Détail complet dans `README.md`

## 3 novembre 2026 · Correction mobile et JSON (semaine 10)

- Bug corrigé : sur mobile, le bouton « Demander un devis » poussait le menu burger hors de l'écran
- Exercice de contrôle JSON : correction du fichier `brocante.json` (7 erreurs)
- Création d'un fichier JSON pour T1AS avec les 4 vrais services du site (service, titre, description, icône, liste de ce qui est inclus, lien)

## 10 novembre 2026 · Cartes générées en JavaScript (semaines 9 à 11)

- `mes-cartes.md` : analyse d'une carte de service de l'accueil, chaque texte écrit à la main est relié à une étiquette du JSON (`icone`, `service`, `description`, `lien`)
- `data.json` : les 4 services du site au format JSON
- `index.html` : les 4 cartes écrites à la main sont retirées, il reste un conteneur vide `#liste-cartes` et une zone de message `#etat` (`role="status"`)
- `app.js` :
  - `fetch("data.json")` charge les services
  - `afficherLieux()` crée chaque carte avec `createElement` (icône SVG, titre, texte, lien « En savoir plus » avec texte caché pour lecteur d'écran)
  - Message « Chargement des services… » pendant le chargement
  - Message si la liste est vide
  - Message d'erreur clair si le fichier ne charge pas (`.catch`)
- Résultat testé : les 4 cartes s'affichent comme avant, aucune erreur dans la console, l'accessibilité de la semaine 8 est conservée

---

## Pour ouvrir le site

Les cartes de services sont chargées avec `fetch`, il faut donc ouvrir le site avec un petit serveur (par exemple l'extension **Live Server** de VS Code) et pas en double cliquant sur `index.html`. Sans serveur, le navigateur bloque la lecture de `data.json` et la page affiche le message d'erreur à la place des cartes.
