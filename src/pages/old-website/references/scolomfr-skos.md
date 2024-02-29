---
layout: reference.njk
title: Réseau Canopé et le ScoLOMFR en SKOS
subtitle: PUBLICATION DU SCOLOMFR EN SKOS
date: 2022-01-01
abstract: Conseils et développement pour la diffusion d'un thésaurus dans le web de données, en prenant en compte les versions successives du thésaurus.
image: /assets/old-website/uploads/2017/02/Logo_CANOPE_VERT_petit-160x67.png
tags: reference
---

## Réseau Canopé et le ScoLOMFR en SKOS

### Publication du ScolomFr en SKOS

[Réseau Canopé](https://www.reseau-canope.fr/) (ex CNDP / CRDP), réseau de création et d'accompagnement pédagogique, est en charge de la diffusion du [ScoLOMFR](https://www.reseau-canope.fr/scolomfr/accueil.html), un thésaurus de description des ressources numériques de l’enseignement scolaire. Ce thésaurus est subdivisé en 46 micro-thésaurus, pour un total de près de 15000 concepts.

Le ScoLOMFR est constitué de 2 parties : un schéma de description des ressources, qui liste les champs possibles pour la description d'une ressource pédagogique, et les vocabulaires contrôlés dans lesquels certains de ces champs prennent leur valeur.

Le ScoLOMFR suit rigoureusement les textes officiels concernant les programmes scolaires, et est mis à jour à chaque réforme.

Nous accompagnons Réseau Canopé depuis 2016 pour la diffusion du ScoLOMFR. La diffusion de ces vocabulaires est aujourd'hui **à la pointe de l'état de l'art en terme de diffusion de vocabulaires contrôlés dans le web de données**. Les grands domaines d'intervention pour cet accompagnement ont été :

- Une politique de versionnement claire des vocabulaires;
- Une gestion des évolutions dans la structure des vocabulaires entre chaque version : concepts dépréciés, obsolètes, fusionnés, découpés, déplacés;
- Une chaîne de production pour l'export des données depuis l'outil de back-office vers les données diffusées RDF;
- Un [portail de navigation/visualisation des vocabulaires](https://www.reseau-canope.fr/scolomfr/data/fr/), dans lequel les versions successives du thésaurus sont navigables; ce portail de navigation est basé sur l'outil [Skosmos](http://skosmos.org/), avec un développement particulier pour l'affichage des frises temporelles sur la page de chaque concept;
- Une [ontologie de représentation des aspects spécifiques du ScoLOMFR](https://www.reseau-canope.fr/scolomfr/fileadmin/user_upload/ontologie/index-fr.html) : les relations entres certains vocabulaires ("un domaine de connaissance est enseigné dans un niveau éducatif", "un point de programme fait partie d'un domaine de connaissance", etc.);
- Un [profil d'application pour la publication des données](https://www.reseau-canope.fr/scolomfr/fileadmin/user_upload/ontologie/Scolomfr-regles_SHACL-v-6-0.zip), c'est-à-dire un modèle de données s'appuyant sur SKOS, DublinCore, PROV, et l'ontologie spécifique de ScoLOMFR. Ce profil d'application est formellement décrit à l'aide de [SHACL](https://www.w3.org/TR/shacl/);
- Une génération automatique d'un tableau de toutes les modifications qui sont intervenues entre 2 versions d'un vocabulaire (un "diff" de thésaurus);

Nous continuons l'accompagnement de Réseau Canopé en 2021, pour pousser la logique de modification de ce thésaurus vers une ontologie, en enrichissant les relations entre concepts.

(en savoir plus sur le [billet de blog à propos de la diffusion du ScoLOMFR](http://blog.sparna.fr/2018/09/25/thesaurus-versions-of-scolomfr-skos/)).


http://www.sparna.fr/wp-content/uploads/2020/12/scolomfr-screenshot.png