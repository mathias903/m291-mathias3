# Mes cartes

Une ligne par texte écrit à la main dans **une** carte de votre `index.html` (semaine 9). Prenez les étiquettes dans `etiquettes.md` (semaine 10).

## La carte

Élément et classe de la carte entière (par exemple `article.carte`, ou `li` puis `a.carte`) : `div.service-card`

## Ce qu'elle montre

| Texte écrit à la main | Étiquette de `data.json` qui le remplace | Élément et classe |
| --- | --- | --- |
| L'icône clé à molette (dessin SVG) | `icone` | `div.service-icon` puis `svg` |
| Maintenance & Sauvegardes | `service` | `h3` |
| Supervision continue de vos postes et serveurs, correctifs de sécurité, sauvegardes automatiques et testées. | `description` | `p` |
| services.html#maintenance (adresse du lien) | `lien` | `a.service-link`, attribut `href` |
| sur Maintenance & Sauvegardes (texte caché pour les lecteurs d'écran) | `service` | `span.sr-only` dans `a.service-link` |

## Les étiquettes vrai ou faux

Pour chaque étiquette qui vaut `true` ou `false` : le texte et la classe à montrer dans chaque cas.

| Étiquette | Si `true` : texte, classe | Si `false` : texte, classe |
| --- | --- | --- |
| aucune | Les fiches T1AS n'ont pas d'étiquette vrai ou faux | |

## Le conteneur

L'élément qui contient toutes les cartes, et l'`id` que vous lui donnez : `div.services-grid`, avec `id="liste-cartes"`

## La carte copiée depuis index.html (étape 3)

```html
      <div class="service-card">
        <div class="service-icon">
          <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
        </div>
        <h3>Maintenance & Sauvegardes</h3>
        <p>Supervision continue de vos postes et serveurs, correctifs de sécurité, sauvegardes automatiques et testées.</p>
        <a href="services.html#maintenance" class="service-link">En savoir plus<span class="sr-only"> sur Maintenance & Sauvegardes</span> <span aria-hidden="true">→</span></a>
      </div>
```
