# T1AS · site rendu accessible (M291 s08, WCAG 2.2 AA)

Site du projet T1AS (prestataire informatique pour PME) corrigé selon les critères WCAG 2.2 niveau AA.
Testé avec axe-core sur les 5 pages, en desktop et en mobile : 0 erreur.

## Ce qui a changé

**Contrastes**
- Gris des textes secondaires `#718096` → `#5a6478` (3,64:1 → 5,39:1 sur fond gris clair)
- « Fermé » dans les horaires `#a0aec0` → `#5a6478` (2,26:1 → 5,95:1)
- Petits textes bleu clair sur le hero `#bcd2ff` → `#dbe6ff` (4,12:1 → 5,01:1)
- Prix « / mois » sur la carte bleue : opacité retirée (3,89:1 → 5,01:1)
- Bordure des champs du formulaire `#e2e8f0` → `#7b879c` (1,23:1 → 3,29:1)

**Clavier et focus**
- Lien « Aller au contenu principal » au début de chaque page
- Contour de focus de 3 px sur tous les éléments cliquables (blanc sur les fonds bleus)
- Les champs du formulaire n'enlèvent plus le contour (`outline: none` supprimé)
- Menu mobile : `aria-expanded`, le focus va dans le menu, Échap le ferme et rend le focus au bouton

**Cibles tactiles**
- Boutons, menu burger, bouton fermer, icônes réseaux sociaux et champs : 48 × 48 px minimum
- Liens de navigation et du footer agrandis (zone cliquable ≥ 24 px)

**Lecteurs d'écran**
- Icônes SVG décoratives masquées (`aria-hidden`), ✓ et → aussi
- « En savoir plus » précise le service (texte caché pour lecteur d'écran)
- Étoiles des avis lues « Note de 5 sur 5 »
- Logo du menu mobile en `alt=""` (décoratif, le logo du header garde `alt="T1AS"`)
- Balise `<main>`, `aria-current="page"`, fil d'Ariane en `<nav>`, tableau des horaires avec `<caption>` et `<th>`
- Ordre des titres corrigé (plus de saut de h1 à h4)

**Formulaire**
- Message d'erreur sous chaque champ qui dit comment corriger, champ entouré en rouge + icône ⚠ (pas seulement la couleur)
- Le focus va sur le premier champ en erreur, le résumé est annoncé (`role="status"`)
- `autocomplete` sur nom, email, téléphone et entreprise

**Confort**
- Animations coupées si l'utilisateur a activé « réduire les animations »
