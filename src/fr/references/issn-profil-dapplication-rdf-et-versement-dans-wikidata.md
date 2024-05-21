---
layout: reference.njk
title: "ISSN : profil d'application RDF et versement dans Wikidata"
subtitle:
date: 2023-01-01
abstract: Comment le plus grand catalogue bibliographique de périodiques s'est aligné sur un graphe sémantique. Et comment l'ISSN a valorisé ses données au travers de leur versement dans Wikidata.
image: /assets/uploads/2020/12/logo-square-160x130.jpeg
tags: reference
permalink: fr/references/{{ title | slugify }}/
---

## ISSN : profil d'application RDF et versement dans Wikidata

Le Centre International de l'ISSN, situé à Paris, maintient le répertoire de tous les identifiants ISSN attribués à des publications en série. C’est la **source de référence la plus complète au monde en matière d’identification de publications en série**. La base contient plus de 2.5 millions d’ISSN qui ont été attribués par le Réseau des centres régionaux de l'ISSN. Entre 60000 et 70000 notices sont ajoutées par ans.

Notre intervention à l'ISSN depuis 2016 a consisté en 4 points :

- Une formation initiale permettant de poser les enjeux et les bases théoriques et techniques des standards du web sémantique;
- Un accompagnement à la formalisation et à la documentation du [profil d'application de l'ISSN pour la diffusion des données dans le linked data](https://www.issn.org/understanding-the-issn/assignment-rules/issn-linked-data-application-profile/), ainsi que de son alignement depuis les notices en MARC21;
- Une analyse et une spécification pour la diffusion des données du [portail de l'ISSN](https://portal.issn.org/) à destination des moteurs de recherche en utilisant [schema.org](http://schema.org/);
- Une analyse et un développement spécifique pour la synchronisation des données librement accessibles du catalogue de l'ISSN avec [Wikidata](http://wikidata.org/); ce développement, d'abord envisagé avec OpenRefine, a été finalement développé sous la forme d'un "bot" Wikidata : [ISSNBot](https://github.com/CIEPS/ISSNBot), capable de réaliser la synchronisation entre les données du registre de l'ISSN et les données présentes dans Wikidata. On peut trouver plus d'informations sur ce projet et la modélisation choisie sur la [page de discussion du projet sur Wikidata](https://www.wikidata.org/wiki/Wikidata_talk:WikiProject_Periodicals/Archive_2#Data_donation_from_ISSN_Register_-_Feedback_welcome).

Les bénéfices pour l'ISSN de ces interventions :

- Une meilleure compréhension et conceptualisation de la structure interne de son catalogue;
- Un nouveau canal de diffusion de ses données pour ses clients, au travers d'accès via la négociation de contenu et d'un SPARQL endpoint (en accès payant);
- Une visibilité des données accrue par une annotation sémantique en schema.org;
- Un partage et une valorisation des données gratuites du catalogue au travers de Wikidata;
- À terme, un enrichissement du catalogue ISSN par la récupération des données de Wikidata;

Nous continuons notre accompagnement auprès de l'ISSN pour toutes les questions de données liées et de web sémantique, en particulier la modélisation du [Keepers Registry](https://keepers.issn.org/) à l'aide de schema.org.


![screenshot scoLOMFR](/assets/uploads/2020/12/screenshot-issn-wikidata.png)