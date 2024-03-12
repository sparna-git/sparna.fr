---
layout: reference.njk
title: Ministère de la Culture et de la Communication
subtitle: PUBLICATION DE THÉSAURUS SKOS EN PDF
date: 2017-01-01
abstract: La plate-forme data.culture.fr diffuse plusieurs vocabulaires contrôlés du Ministère, notamment dans des formats PDF cliquables, générés automatiquement à partir des données SKOS.
image: /assets/uploads/2015/01/Logo-ministere-culture-et-communication-170-140-160x130.png
tags: reference
permalink: en/references/{{ title | slugify }}/
---

## Ministère de la Culture et de la Communication

### Diffusion de thésaurus SKOS en PDF

Le ministère de la Culture et de la Communication est engagé dans une transition vers le web de données culturel et a fait connaître sa démarche dans la [feuille de route](http://cblog.culture.fr/projet/2013/11/07/groupe-de-travail-metadonnees-culturelles/) qu'il a publiée. Cette feuille de route comprend 9 actions, dont la mise en place d'un mécanisme d'identifiants pérennes pour les ressources culturelles, l'interconnexion des grands référentiels culturels (le "graphe culture"), ou l'interconnexion inter-institutionnelle des données.

Dans le cadre de cette feuille de route, et plus précisément pour ce qui concerne ses thésaurus, le Ministère a fait développer un binôme d'applications open-source, [Ginco](https://github.com/culturecommunication/ginco) et [Ginco Diffusion](https://github.com/culturecommunication/ginco-diff). Elles permettent respectivement d'éditer des vocabulaires (respectant la norme [ISO-25964](http://www.niso.org/schemas/iso25964/)) pour produire des fichier SKOS, et de publier ces fichiers SKOS sur le web, sur la plateforme [data.culture.fr/thesaurus](http://data.culture.fr/thesaurus/).

http://www.sparna.fr//wp-content/uploads/2015/01/screenshot-index-alpha.png

Notre intervention dans ce projet a consisté à perfectionner l'application open-source [SKOS Play](http://labs.sparna.fr/skos-play) (voir également les [billets à ce sujet sur le blog](http://blog.sparna.fr/category/outils/skos-play-outils/)) pour publier dans la plateforme [data.culture.fr/thesaurus](http://data.culture.fr/thesaurus/) des versions PDF de qualité professionnelle de chaque thésaurus mis en ligne. On verra notamment le résultat sur le [thésaurus de la désignation des oeuvres architecturales](http://www.inventaire.culture.gouv.fr/telechar/thesaurus_architecture_2013.pdf), et celui des [objets mobiliers](http://www.inventaire.culture.gouv.fr/telechar/thesaurus_objets_mobiliers_2014.pdf). En collaboration avec les équipes de l'[inventaire du patrimoine](http://www.inventaire.culture.gouv.fr/), nous avons intégré un design pour les index alphabétiques, les vues hiérarchiques et les tableaux de traduction, et généré des index permutés à partir des termes de thésaurus. Ces évolutions sont [disponibles en open-source](https://bitbucket.org/tfrancart//src) pour la communauté.