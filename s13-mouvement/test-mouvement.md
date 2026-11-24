# Le test « enlevez le mouvement »

Les deux mouvements du collègue, avant de les retirer :

- `header h1 { animation: clignote … infinite alternate; }` — **N'apprend rien** : le titre « Phare » clignote sans fin et sans raison. Il clignote plus de 5 secondes sans moyen de l'arrêter, ce que le critère WCAG 2.2.2 (niveau A) interdit.
- `.carte { transition: all 0.8s; }` et `.carte:hover { transform: rotate(3deg) scale(1.1); }` — **N'apprend rien, et trompe** : la carte pivote et grossit au survol, comme si elle se cliquait, alors qu'elle ne mène nulle part.

Mes trois mouvements utiles :

- `button` : la couleur glisse en 0,2 s au clic. Il dit : « je vous ai entendu ».
- `button:hover` : un halo bleu clair au survol. Il dit : « ceci se clique ».
- `.carte` : les cartes apparaissent en fondu, au chargement et à chaque recherche. Elles disent : « la liste a changé ».

Avec `prefers-reduced-motion: reduce` (émulé dans les outils de Chrome, panneau Rendering), les cartes apparaissent d'un coup et le bouton change de couleur d'un coup. `gare` donne toujours 3 cartes.
