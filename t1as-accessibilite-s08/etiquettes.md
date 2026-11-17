# Mes étiquettes

Projet : T1AS, catalogue des prestations (`prestations.html`)

Une fiche de `data.json` = une prestation que T1AS vend aux PME. Les 4 grands services de la page d'accueil sont dans `services.json`.

| Étiquette | Écran qui l'affiche | Sert à (afficher, filtrer, trier) | Sorte de valeur | Unique ? | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | aucun | distinguer les fiches | nombre | oui | `1` |
| `nom` | Catalogue | afficher, filtrer (recherche) | texte | non | `"Contrôle de santé d'un poste"` |
| `service` | Catalogue | afficher, filtrer (recherche) | texte | non | valeurs permises : `"Maintenance & Sauvegardes"`, `"Cloud"`, `"Téléphonie"`, `"Gestion de parc informatique"` |
| `description` | Catalogue | afficher | texte | non | `"Vérification complète d'un ordinateur…"` |
| `aDistance` | Catalogue (« À distance » ou « Sur place ») | afficher, filtrer (bouton « Faisable à distance ») | vrai/faux | non | `true` |
| `prix` | Catalogue | afficher, trier (du moins cher au plus cher) | nombre (CHF) | non | `90` |
| `unite` | Catalogue | afficher (à côté du prix) | texte | non | `"par poste"` |
| `delai` | Catalogue | afficher | texte | non | `"24 h"` |

`prix` est un nombre pour pouvoir trier ; l'unité (« par poste », « forfait ») est à part, dans `unite`.
