# T1AS — votre prestataire informatique au service des PME

Pour les patrons et responsables de PME de la région de La Tour-de-Peilz qui veulent trouver vite la bonne prestation informatique, avec son prix, son délai et si elle peut se faire à distance.

Site : https://mathiaswicht.ch/m291-mathias3/t1as-accessibilite-s08/

Catalogue des prestations : https://mathiaswicht.ch/m291-mathias3/t1as-accessibilite-s08/prestations.html

Le site est dans le dossier `t1as-accessibilite-s08/`. Son journal de bord est dans `t1as-accessibilite-s08/JOURNAL-DE-BORD.md`, et le détail de l'accessibilité (semaine 8) dans `t1as-accessibilite-s08/README.md`.

---

## M291 — Mathias

Je suis un élève de troisième année de médiamatique au CPNV (SM-C3A).

- Je suis assez créatif et j'aime bien construire mon site avec des niveaux différents
- Je voudrais améliorer mes prompts pour que l'IA soit plus performante
- Me perfectionner dans le codage

GitHub : mathias903

Les fiches ajoutées par le formulaire restent affichées jusqu'au rechargement de la page : il n'y a pas de serveur pour les enregistrer.

## Micro-interactions (site T1AS)

- Les boutons changent de couleur en douceur et montrent un halo bleu clair au survol. Ils disent : « ceci se clique, je vous ai entendu ».
- Les cartes des services et des prestations apparaissent en fondu, au chargement et à chaque recherche. Elles disent : « la liste a changé ».
- La zone `#erreurs` du formulaire des prestations apparaît en fondu. Elle dit : « regardez ici : il y a quelque chose à corriger ».
- J'ai retiré le mouvement des cartes de services au survol : la carte ne se clique pas, seul son lien « En savoir plus » se clique.

## Sources des icônes (site T1AS)

- `t1as-accessibilite-s08/icones/fermer.svg` : icône « x » de Lucide (lucide.dev), licence ISC, couleur adaptée au site
- `t1as-accessibilite-s08/icones/plus.svg` : icône « plus » de Lucide (lucide.dev), licence ISC, couleur adaptée au site


## État du projet (semaine 14)

| Ligne de la grille | Où j'en suis | Ce qui manque | Semaine prévue |
| --- | --- | --- | --- |
| Recevabilité : Pages en navigation privée | fait | — | — |
| Recevabilité : data.json chargé par fetch | fait | — | — |
| Recevabilité : HTML, CSS, JS seuls | fait | la police Inter vient encore de Google Fonts : à télécharger dans le dossier du site | 15 |
| 1. Pages, data.json (30 fiches), fetch | fait | — | — |
| 2. Recherche ou filtre, formulaire #erreurs | fait | — | — |
| 3. 3 micro-interactions, responsive, SVG | fait | — | — |
| 4. Commits réguliers et parlants | fait | — | — |
| 5. README et journal IA | fait | — | — |

## Écarts avec la maquette

- **Maquette :** l'accueil montrait les 4 services, sans page de prix. **Code :** une page « Prestations » avec 30 prestations, leur prix et leur délai, chargées depuis `data.json`. **Pourquoi :** un patron de PME veut savoir combien coûte une prestation précise avant d'appeler ; 4 cartes ne suffisaient pas pour une vraie recherche.
- **Maquette :** les cartes de services montaient au survol de la souris. **Code :** elles ne bougent plus. **Pourquoi :** la carte ne se clique pas, seul le lien « En savoir plus » se clique ; le mouvement promettait un clic qui n'existait pas (semaine 13).
- **Maquette :** pas de filtre. **Code :** un bouton « Faisable à distance » au-dessus du catalogue. **Pourquoi :** beaucoup de PME veulent une solution sans attendre qu'un technicien se déplace.

## Journal IA

### 1. Le catalogue des 30 prestations (semaine 10)

- **Outil et date :** Claude, 17 novembre 2026
- **Ce que j'ai demandé :** mettre à jour mon site T1AS et faire les exercices « dans votre projet » ; pour `data.json`, 30 fiches de prestations crédibles pour une PME de Suisse romande, avec les étiquettes `nom`, `service`, `description`, `aDistance`, `prix`, `unite`, `delai`.
- **Ce que l'IA a rendu de faux ou d'inutile :** une prestation à 0 franc (la portabilité des numéros) s'affichait « Inclus » sans dire avec quoi.
- **Ce que j'ai corrigé à la main :** la fonction `ecrirePrix` dans `prestations.js` affiche maintenant « Inclus avec la téléphonie IP », et « Prix sur demande » pour une prestation ajoutée par le formulaire.

### 2. La recherche et le formulaire (semaine 12)

- **Outil et date :** Claude, 17 novembre 2026
- **Ce que j'ai demandé :** la recherche de l'exercice 1 sur `nom` et `service`, un bouton « Faisable à distance » sur `aDistance`, et le formulaire de l'exercice 2 avec deux règles et la zone `#erreurs`.
- **Ce que l'IA a rendu de faux ou d'inutile :** l'étiquette du service prenait toute la largeur de la carte, comme une barre.
- **Ce que j'ai corrigé à la main :** `align-self: flex-start` sur `.prestation-card .service-tag` dans `css/style.css`.

### 3. Les micro-interactions (semaine 13)

- **Outil et date :** Claude, 17 novembre 2026
- **Ce que j'ai demandé :** trois micro-interactions en CSS seul, avec un bloc `prefers-reduced-motion` qui les coupe.
- **Ce que l'IA a rendu de faux ou d'inutile :** rien de faux dans les trois règles ; mais en faisant le test « enlevez le mouvement », j'ai vu que mes cartes de services de l'accueil montaient au survol alors qu'elles ne se cliquent pas.
- **Ce que j'ai corrigé à la main :** la règle `.service-card:hover` est retirée de `css/style.css`.
