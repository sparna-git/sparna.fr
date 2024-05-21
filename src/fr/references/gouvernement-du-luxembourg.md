---
layout: reference.njk
title: Gouvernement du Luxembourg
subtitle: PORTAIL LÉGISLATIF NOUVELLE GÉNÉRATION
date: 2021-01-01
abstract: Un portail de recherche basé sur un graphe de liens entre les lois et sur des vocabulaires contrôlés mis en musique par Virtuoso et ElasticSearch. Un bel exemple de réalisation dans le contexte de ELI (European Legislation Identifier).
image: /assets/uploads/2017/02/logo-gv-lux-carre-small-130x130.jpg
tags: reference
permalink: fr/references/{{ title | slugify }}/
---

## Gouvernement du Luxembourg

### legilux.public.lu / Casemates

Le Luxembourg a mis en ligne le 1er janvier 2017 la nouvelle version de son portail législatif http://legilux.public.lu. Dans la mouvance combinée de l'initiative [ELI](http://blog.sparna.fr/2015/05/31/eli-european-legislation-identifier-web-de-donnees-legislatif-europeen/) (European Legislation Idenfier), de l'open data et du web de données, celui-ci s'appuie sur un **graphe de connaissance législatif**, ouvert et interrogeable : la base "Casemates", accessible à http://data.legilux.public.lu/.

Ce graphe de connaissance s'appuie sur une modélisation des textes législatifs en FRBR-OO (la dernière évolution en terme de description bibliographique), qui distingue précisément une loi de façon générale, une version particulière de la loi (publiée au Journal Officiel, consolidée à telle date, etc.), et un format spécifique (HTML, XML, PDF) d'une version particulière. Le graphe capture ensuite l'ensemble des relations entre les textes de loi : liens de citation, d'amendement, d'abrogation, de transposition, de projet de loi, etc. Les vocabulaires contrôlés font également partie du graphe de connaissance : liste des communes luxembourgeoises, des thématiques, des types de texte, des ministères, etc.

La richesse de ce graphe permet une **autocompletion intelligente et des facettes de recherche précises** dans le moteur de recherche de Legilux : l'utilisateur est guidé par des icônes pour sélectionner un ministère, un lieu, une thématique, ou bien directement un texte de loi. ElasticSearch motorise la recherche dans Legilux.

![screenshot scoLOMFR](/assets/uploads/2017/02/legilux-autocompletion.png)


Le graphe de connaissance "brut" - en RDF - est ouvert sur le web : par des métadonnées ELI (et schema.org) incluses dans les notices de Legilux, par des URIs déréférençables, par des exports téléchargeables, par un service d'interrogation directe en SPARQL. **L'ouverture des données est complète**.

Je suis intervenu comme assistance à maitrise d'ouvrage en amont du projet : synthèse des besoins et des objectifs, architecture fonctionnelle, rédaction des deux cahiers des charges Casemates puis Legilux. Je suis également intervenu lors du suivi de la réalisation confié à la société [SWORD](http://www.sword-group.com/fr/) pour assurer le respect des spécifications. Le résultat est **un système de publication de la loi à la pointe de l'état de l'art** par rapport aux standards du web, et aux contraintes de diffusion des données vers les citoyens, les éditeurs juridiques et les moteurs de recherche.

