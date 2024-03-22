---
title: "Formation OWL : ontologies et modèles conceptuels pour les graphes de connaissances"
date: 2022-01-01
permalink: "fr/formation/{{ title | slugify }}/"
tags:
  - formation
---

## {{title}}

### Objectifs de la formation

Les ontologies forment une partie importante de l'écosystème du Web de données, et un passage obligé pour atteindre une bonne interopérabilité sémantique des données (_"ce qui est compris des données est bien ce qui a été publié"_). Cette formation vise à :
  - dresser un panorama des ontologies les plus communes sur le Web de données
  - positionner et comprendre les grands modèles conceptuels de description des données patrimoniales et des autres secteurs
  - comprendre les opérateurs RDFS et OWL disponibles pour décrire un domaine de connaissance
  - s'outiller pour créer sa propre ontologie OWL dans Protégé

### Durée

1,5 jours. Cette formation peut être adaptée sur 1 ou 2 journées.

### À qui s'adresse cette formation ?

- Profils de **documentalistes orientés data** devant spécifier un domaine de connaissance
- **Ingénieurs et développeurs** devant mettre en oeuvre une chaine de traitement de données sémantique impliquant du raisonnement automatique
- **Data scientists** devant migrer des données dans un graphe de connaissances

### Prérequis

Les stagiaires qui assistent à cette formation doivent :
  - Connaître la structure de base des graphes RDF (un rappel sera fait en début de formation)
  - Être à l'aise avec les outils informatiques (éditeurs texte, éditeurs de requêtes, outils de gestion de base de données, etc...)


### Programme de la formation

#### Rappels sur la structure RDF

- Rappel du modèle de données RDF
- Rappel de la syntaxe Turtle

#### Introduction aux ontologies

- Qu'est-ce qu'une ontologie ?
- Quelle est la différence entre une ontologie OWL, un vocabulaire contrôlé SKOS, une spécification SHACL ?
- Ontologies haut-niveau versus ontologies de domaine : principes d'extension des ontologies
- Ontologies "légères" versus "modèles conceptuels rigides" : les approches de formalisation d'une ontologie

#### Les opérateurs des ontologies

- Opérateurs de base RDFS : subClassOf, subpropertyOf, domain, range
- Opérateurs OWL : propriétés inverses, transitives
- Restrictions OWL : restrictions de cardinalités, de domain, de range

#### Les ontologies à connaître sur le Web de données

- DublinCore : métadonnées documentaires génériques
- FOAF : description des personnes
- SKOS : vocabulaires contrôlés
- ORG : description des organisations
- schema.org : les données structurées pour les moteurs de recherche
- PROV : description de la provenance et de l'historique des données
- DCAT : description des jeux de données

#### Protégé : un éditeur d'ontologies OWL

- Exercice d'utilisation de Protégé pour comprendre les opérateurs OWL et éditer une ontologie
- Utilisation d'un raisonneur
- Exemple d'ontologie utilisation de la classification automatique : interactions médicamenteuses
- Mise en oeuvre du raisonnement automatique dans un triplestore : manipulation de GraphDB

#### Les modèles conceptuels des données patrimoniales

- Historiques des modèles conceptuels en bibliothèque, musées et archives
- FRBR / LRM : structuration des notices bibliographiques
- CIDOC-CRM : description des objets patrimoniaux
- Records In Contexts : structuration des notices archivistiques
- Utiliser ou étendre ces modèles conceptuels dans son projet

#### Diffuser son ontologie sur le web

- Décrire son ontologie avec les bonnes métadonnées
- Bonne pratique de publication des ontologies
- Outils de documentation et de publication automatique des ontologies

### Adapter cette formation

[Contactez-nous](https://sparna.fr/contact/) pour adapter cette formation à votre projet. En particulier cette formation peut être adaptée sur la base des données existantes dans votre projet.

