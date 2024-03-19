---
title: "SHACL training : specify the structure of your knowledge graph"
date: 2022-02-01
permalink: "en/training/{{ title | slugify }}/"
tags:
  - formation
---

## {{title}}

### Objectifs de la formation

La spécification de la structure d'un graphe de connaissance est au coeur des projets _"data centric"_. Cette spécification écrite en SHACL permet de contrôler l'intégrité des données, de documenter le modèle, de générer des interfaces, de combiner des ontologies, de décrire des règles métier.

Cette formation a pour objectifs de:

- Positionner l’utilisation de SHACL par rapport à OWL, dans une architecture graphes de connaissances
- Connaître les éléments de base du vocabulaire SHACL;
- Savoir mettre en œuvre des outils SHACL:
    - Edition de règles SHACL dans des tableurs Excel
    - Validation de données avec SHACL
    - Génération de documentation et de diagrammes à partir de SHACL
    - Paramétrage de l'outil d'interrogation visuelle Sparnatural à partir de SHACL
    - Génération automatique de règles SHACL à partir de l'analyse de données RDF
- Connaître les types de règles SHACL : règles structurelles vs. règles métiers
- Savoir encoder des règles métier en SHACL


### Durée

1 journée. Cette formation peut être adaptée sur 1,5 jour.

### À qui s'adresse cette formation ?

- Profils de **documentalistes orientés data** devant documenter la structure d'un graphe de connaissances
- **Ingénieurs** devant mettre en oeuvre une chaine de traitement de données sémantique (migration, gestion, publication de données RDF)
- **Data scientists** devant contrôler l'intégrité de graphes de connaissances

### Prérequis

Les stagiaires qui assistent à cette formation doivent :
  
  -  Connaitre la structure de base des graphes RDF (un rappel sera fait en début de formation)
  -  Connaittre la syntaxe RDF Turtle
  -  Avoir des notions de OWL (savoir ce qu’est une classe et une propriété)
  -  Avoir des notions de requête SPARQL


### Programme de la formation

#### Rappels sur la structure RDF

- Rappel du modèle de données RDF : triplets, URIs, litéraux, noeuds anonymes
- Rappel de la syntaxe Turtle
- Positionnement de SHACL par rapport à OWL

#### Le modèle SHACL

- Les spécifications SHACL au coeur d'un système de graphes de connaissances
- Notion de shapes, avec leur target
- Notion de contraintes 
- Structure d’un rapport de validation
- Shapes fermées / ouvertes
- Exercice SHACL théorique
- Application de SHACL à plusieurs niveaux dans le workflow:
  - Shapes de validation de conversion de données
  - Shapes de profil d’application
  - Shapes de description des datasets

#### Editer du SHACL et valider des données

- Manipulation d’outil : tableau Excel de saisie SHACL
  - Principes du convertisseur
  - Saisie de Shapes simples sur un modèle du client
- Manipulation d’outil : validateur SHACL en ligne de commande pour générer des rapports de validation
- Manipulation d’outil : support de SHACL dans GraphDB
- Exemples des spécifications du Parlement Européen documentées en SHACL

#### SHACL avancé

- SHACL avancé:
  - SHACL-AF : SPARQL-based targets
  - Ecrire des règles métiers à base de requêtes SPARQL
  - Etendre SHACL avec de nouvelles contraintes
- Les extensions du vocabulaire DASH


### Adapter cette formation

[Contactez-nous](contact) pour adapter cette formation à votre projet. En particulier cette formation peut être adaptée sur la base des données existantes dans votre projet.

