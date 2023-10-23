---
title: ARGOS - UMR 6134 SPE
heroImg: "argos.webp"
layout: "../../layouts/project.layout.astro"
date: 2023
description: "ARGOS (Automatic Route for GeOlocation System) est un outil numérique qui permet de déterminer la géolocalisation de points chauds de feux de végétation en milieu montagneux à partir d'images thermiques obtenues par une caméra portée par drone. Le projet est développé dans le cadre du projet GOLIAT rattaché à l’UMR SPE 6134 de l’Université de Corse, visant à fournir un outil d’aide à la lutte contre les feux de forêt. En raison de l'intensification des feux liée au réchauffement climatique, les pompiers sont confrontés à des défis de plus en plus difficiles. Le projet ARGOS calcule les positions GPS des points chauds détectés à partir d'images thermiques de drone et génère des résultats dans différents formats de fichiers : txt, cvs, kml, gpx, json, geojson et shapefile. Ces résultats sont visualisables sur une carte satellite intégrée à l’application mais peuvent également être téléchargeables afin d’être intégrés dans d’autres logiciels. Il convient de noter que le projet ARGOS est actuellement sous brevetage et bénéficie de la protection intellectuelle."

competence: "FrontEnd, BackEnd, Graphisme"
---

## I. Introduction

ARGOS, ou Automatic Route for GeOlocation System, est un outil numérique révolutionnaire conçu pour déterminer la géolocalisation des points chauds de feux de végétation en milieu montagneux. Il utilise des images thermiques capturées par une caméra portée par un drone pour effectuer cette tâche essentielle. Le projet ARGOS fait partie d'une initiative plus vaste appelée GOLIAT, qui est affiliée à l'UMR SPE 6134 de l'Université de Corse. L'objectif principal de ce projet est de fournir un outil d'aide à la lutte contre les feux de forêt, une mission de plus en plus difficile en raison de l'intensification des incendies provoquée par le réchauffement climatique. Il convient de noter que le projet ARGOS est actuellement sous brevetage et bénéficie de la protection intellectuelle.

<div style="display:flex; justify-content:center; width:100vw;">
<iframe width="560" height="315" src="https://www.youtube.com/embed/QKzReYPI2II?si=uUK2NUpQ0ItD9Zrz" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>

## II. Fonctionnalités

ARGOS offre les fonctionnalités suivantes :

- Téléchargement d'images thermiques de drone pour chaque nouvelle mission.
- Calcul des positions GPS des points chauds détectés.
- Génération de résultats sous différents formats de fichiers : txt, cvs, kml, gpx, json, geojson et shapefile.
- Visualisation des résultats sur une carte satellite intégrée à l'application.
- Téléchargement des résultats pour une intégration dans d'autres logiciels.

## III. Technologies Utilisées

Le développement d'ARGOS a impliqué l'utilisation de plusieurs technologies et compétences, notamment :

- Utilisation de Next.js (React) pour créer l'interface web.
- Gestion avancée des fonctionnalités, requêtes asynchrones, gestion des états, composants, TypeScript, Tailwind CSS, cartes interactives avec Pigeon Maps, tableaux, réactivité, appels d'API, sécurisation des routes, gestion des jetons JWT.
- Conception d'une expérience utilisateur (UX) et d'une interface utilisateur (UI) en respectant une charte graphique.
- Création d'algorithmes de tri pour les tableaux et de recherche.
- Développement avec Docker (Docker Compose).
- Gestion utilisateur de l'API REST existante avec FastAPI, incluant la gestion de la base de données PostgreSQL, la cryptographie des jetons JWT, l'ajout de routes, de schémas et la mise à jour du modèle de la base de données MCD.
- Amélioration de l'API existante avec la possibilité d'exporter les données sous différents formats et la création d'archives zip.

![image1.png](/img/argos/image1.png)

## IV. Automatisation et Déploiement

Pour faciliter le déploiement d'ARGOS, un script d'automatisation en bash a été développé. Il gère le lancement de l'application, la gestion des journaux, la mise en réseau et la création d'un routeur avec une adresse IP publique.

## V. Expérience Professionnelle

J'ai débuté mon travail sur le projet ARGOS lors d'un stage de deux mois, où j'ai eu l'occasion de contribuer de manière significative au développement de l'outil. Après mon stage, j'ai continué à travailler sur ARGOS en tant que professionnelle en développement web fullstack, grâce à un contrat à durée déterminée de deux mois. Cette expérience m'a permis d'acquérir une expertise approfondie dans le développement et l'amélioration de l'outil.

## VI. Conclusion

ARGOS est un outil numérique puissant et polyvalent qui contribue à la lutte contre les feux de forêt en permettant la géolocalisation des points chauds. Il offre une interface utilisateur conviviale, des fonctionnalités avancées et une intégration de cartes interactives, faisant de ce projet un atout essentiel pour les professionnels de la lutte contre les incendies.
