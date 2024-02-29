---
layout: reference.njk
title: Office des Publications de l'Union Européenne
subtitle: CELLAR, ELI, EUROVOC
date: 2019-01-01
abstract: Un repository de métadonnées centralisé qui gère, dans un modèle FRBR, les métadonnées multilingues et multiformats des publications de l'UE.
image: /assets/old-website/uploads/2015/01/EU-Publications-Office-logo.svg--160x130.png
tags: reference
---

## Office des Publications de l'Union Européenne

L’[Office des Publications](http://publications.europa.eu/) est un organisme interinstitutionnel, basé au Luxembourg, et assure l’édition des publications des institutions des Communautés européennes et de l’Union européenne, notamment le [Journal Officiel de l'Union européenne](http://eur-lex.europa.eu/oj/direct-access.html) en 23 ou 24 langues. Sa mission d'éditeur juridique à destination des citoyens européens l'a conduit à mettre en place il y a plusieurs années le projet [Cellar](http://www.w3.org/International/multilingualweb/luxembourg/slides/41-schmitz.pdf); celui-ci vise à rendre accessible dans un endroit central les métadonnées et les contenus publiés par l'Office.

Le Cellar est largement basé sur les technologies sémantiques; il stocke en effet, dans un modèle [FRBR](http://fr.wikipedia.org/wiki/Sp%C3%A9cifications_fonctionnelles_des_notices_bibliographiques), les métadonnées multilingues et multiformats (celles que l'on retrouve sur le portail [Eur-Lex](http://eur-lex.europa.eu/)) de toutes les publications de l'office, soit environ 1,5 milliards de triplets. Cette base est au coeur du système éditorial de l'Office, en intégrant les métadonnées issues de plusieurs applications sources, et les diffusant vers plusieurs portails ou outils cibles.

http://www.sparna.fr//wp-content/uploads/2015/01/cellar-architecture.png


Notre intervention - limitée au regard de l'ampleur du projet Cellar - s'est faite en plusieurs sous-projets distincts.

### Développement d'un outil d'édition de données RDF

Les données stockées dans le Cellar sont issues d'applications tierces, et, une fois ingérées, ne sont plus directement modifiables sans retourner dans l'application tierce à la source des données. Cependant, des corrections directement dans le Cellar sont parfois nécessaires, pour des raisons de facilité, de rapidité ou de flexibilité. L'Office des Publications avait donc besoin d'une interface permettant de rechercher, visualiser et modifier les métadonnées directement dans le RDF du Cellar.

Cet outil que nous avons développé, baptisé RDFEdit, est entièrement dynamique et basé sur une ontologie OWL pour générer les interfaces d'affichage et de modification. Il intègre pour cela le composant [RDForms](http://rdforms.org/). RDFEdit est [publié sur Joinup](https://joinup.ec.europa.eu/software/rdfedit/description) où vous trouverez plus de détails sur sa conception.
