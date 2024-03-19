---
title: "Formation web de données technique : développer un système de graphe de connaissances"
date: 2023-01-01
permalink: "fr/formation/{{ title | slugify }}/"
tags:
  - formation
---

## {{title}}

### Objectifs de la formation

Cette formation technique, pour les développeurs, elle a pour objectif de donner les capacités aux participants d'utiliser les bonnes méthodes et les outils importants pour la mise en oeuvre d'un projet de graphe de connaissances. Elle s'adresse à des développeurs ou des data scientists.

Cette formation permettra aux participants de répondre aux questions suivantes :

- Comment tirer parti de requêtes SPARQL avancées ? (requêtes fédérées, requêtes de transformation de données, etc.)
- Comment manipuler des données RDF dans des scripts, des programmes (Java), en utilisant RDF4J ou Jena, pour faire des transformations de données ?
- Comment alimenter un graphe de connaissances avec des données relationelles, XML, CSV, JSON, etc. ?
- Comment exposer des données RDF sur le web ?
- Quels sont les principaux modèles d'ontologies à connaître pour réutiliser, traiter ou publier des données ?

### Durée

1,5 jours. Cette formation peut être adaptée sur 1 ou 2 journée.

### À qui s'adresse cette formation ?

Cette formation web de données avancée s'adresse à des **développeurs**, **data scientists**, chefs de projet ou consultants désireux de se perfectionner sur le web de données ou qui sont dans une phase de réalisation d'un projet utilisant les technologies du web de données.

### Prérequis

- Avoir des notions de XML, de JSON
- Savoir écrire des requêtes SQL est un plus
- Avoir des notions de RDF (un rappel sera fait en début de formation)

### Programme de la formation

#### Rappels sur la structure RDF

- Rappel du modèle de données RDF
- Rappel de la syntaxe Turtle

#### RDF et SPARQL avancé
  - SPARQL Update : les opérations de mise à jour SPARQL
  - SPARQL avancé : tirer parti des graphes nommés
  - SPARQL opérations non-standards : recherche full-text et recherche spatiale

#### JSON-LD : encodage de triplets RDF en JSON
  - Rappel des bases du JSON
  - La notion de context JSON-LD
  - Créer des fichiers JSON compatibles RDF avec un context JSON-LD
  - JSON-LD Framing : exporter des fichiers JSON à partir d'une spécification JSON-LD

#### Conversion de données natives en RDF
  - Convertir du XML en RDF/XML en utilisant une feuille de style XSLT
  - Utilisation d'outils de mapping de données natives vers RDF :
    - xls2rdf
    - SPARQLAnything
    - OntoRefine de GraphDB
  - R2RML et Direct Mapping : conversion d'une base relationnelle en RDF avec OnTop

#### SPARQL et SPARQL update
  - Opérateurs SPARQL (en fonction du degré de familiarité des stagiaires)
  - GeoSPARQL pour l'interrogation de données géographiques
  - Utilisation de SPARQL pour mettre à jour les données
  - Utilisation de SPARQL pour exporter les données

#### Le Triplestore GraphDB
  - Installer et configurer GraphDB
  - Utiliser l'interface d'administration
  - Charger des données, explorer et visualiser des données
  - Stratégie de maintenance des données dans un triplestore : les graphes nommées

#### Les API RDF en Java et en Python
  - L'API Java RDF4J : lecture/écriture de RDF, exécution de requêtes SPARQL
  - L'API rdflib en Python
  - Apache Jena : les lignes de commande : SPARQL, inférence et traitements sans écriture de code

### Adapter cette formation

Par nature, cette formation web de données pour les développeurs nécessite une adaptation particulière en fonction du projet, des données. Si votre problématique nécessite l'emploi d'outils particuliers (moteurs d'inférences, bases RDF, ETL sémantiques), ou de modèles de données particuliers, le contenu de base de la formation sera adapté pour les prendre en compte. Pour cela, [contactez-nous](contact).