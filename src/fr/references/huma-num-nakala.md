---
layout: reference.njk
title: CNRS - Huma-Num Nakala
subtitle: NAKALA - SILO DE DONNÉES POUR LES SCIENCES HUMAINES ET SOCIALES
date: 2015-01-01
abstract: Nakala est un service de stockage, de description et de diffusion des données pour les chercheurs en sciences humaines et sociales, basé sur les technologies du web de données (base RDF, service SPARQL).
image: /assets/uploads/2014/09/logohumanum-web-grand-rvb-170-140-160x130.png
tags: reference
permalink: fr/references/{{ title | slugify }}/
---

## CNRS - Huma-Num Nakala

### Nakala - Silo de données pour les sciences humaines et sociales

La mission de la Très grande Infrasctructure de Recherche du CNRS [Huma-Num](http://www.huma-num.fr/) est d’offrir des services numériques aux chercheurs en sciences humaines et sociales. Dans ce cadre elle souhaite mettre à disposition des chercheurs une plateforme d’hébergement et de diffusion de données : [Nakala](https://www.nakala.fr/).

Nakala permet le stockage et l'archivage pérenne des données, leur description (à l'aide de métadonnées [dcterms](https://www.sparna.fr/reference/huma-num-nakala/dublincore.org/documents/dcmi-terms/)), et la rediffusion de ces métadonnées à la fois sous forme de flux [OAI](http://www.openarchives.org/OAI/openarchivesprotocol.html), d’URI déréférençables, et de [service SPARQL](http://www.nakala.fr/sparql). Nakala permet de démontrer la flexibilité des technologies du web de données par rapport à d’autres technologies de diffusion telles que l’OAI. Plus d'informations sur la solution mise en oeuvre sont disponibles sur la [page de description du service Nakala](http://www.huma-num.fr/service/nakala).

![screenshot scoLOMFR](/assets/uploads/2014/09/nakala-services-proposes.jpg)

Au niveau technologique, la solution proposée se démarque par l’utilisation d’un [triplestore Virtuoso](http://virtuoso.openlinksw.com/) comme point central de l’architecture (pas de base relationnelle), et par la mise en œuvre de composants open-source : [PROAI](http://proai.sourceforge.net/) pour la partie OAI, [PUBBY](http://wifo5-03.informatik.uni-mannheim.de/pubby/) pour l'accès aux métadonnées, et par une intégration avec le système d’authentification de la [fédération d'identités Renater](https://services.renater.fr/federation/index).

