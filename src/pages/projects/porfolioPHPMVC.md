---
title: Portfolio en PHP (MVC)
heroImg: "SAE203.webp"
layout : "../../layouts/project.layout.astro"
date : 2022
description : "Dans le cadre de SAE 203, nous devons développer un site web de type
portfolio avec une interface d’administration permettant de configurer,
modifier, supprimer des éléments et d’alimenter le portfolio avec des projets
matérialisés par du contenu multimédia comme des projets répertoriés dans
une base de données. Ainsi, ce rapport présentera différents points qui
retracent l’acheminement des réflexions, analyses et solutions afin de réaliser
le travail demandé."
competence : "FrontEnd BackEnd Graphisme"

---



## I Introduction :

Dans le cadre de SAE 203, nous devons développer un site web de type
portfolio avec une interface d’administration permettant de configurer,
modifier, supprimer des éléments et d’alimenter le portfolio avec des projets
matérialisés par du contenu multimédia comme des projets répertoriés dans
une base de données. Ainsi, ce rapport présentera différents points qui
retracent l’acheminement des réflexions, analyses et solutions afin de réaliser
le travail demandé.


## II Réflexions, analyses et solutions

### II.1 Modélisation de la BDD - Modèle Conceptuel de données

Afin de rendre le portfolio plus dynamique et modifiable, ce dernier doit avoir
une base données. Avant d'implanter la base nous devons réfléchir à qu’est-ce
qu’on attend de la base, quel est son objectif? Quel est son rôle? C’est en se
posant ces questions que nous arriverons à faire une base de données efficace.

Ainsi, j’en ai conclu que ma base de données devait : faire du stockage de
contenu, stocker le texte comme les descriptions des projets, les images du site,
les informations des utilisateurs qui s’inscrivent et le contenu du formulaire de
contact.

Pour poursuivre, nous devons avec un petit paragraphe précis définir ma base
de données, afin d'identifier les entités et les associations entre elles. J’en ai
conclu que : « Le portfolio sera composé de différentes parties (des
localisations), elles-mêmes sont composées de textes, d’images et de projets qui
seront composés également de textes et d'images. Puis, le portfolio devra
stocker les données des utilisateurs et les messages envoyés ».

 
En partant de cette phrase faisons le modèle entité-association.
 
 
![image1.png](/img/sae203/image1.png)

 

 
Nous pouvons constater :
 
- Les localisations peuvent contenir plusieurs images ;
- Les images et textes contiennent une ou plusieurs localisations ;
- Les images et textes peuvent être liés à plusieurs projets ;
- Les projets contiennent une ou plusieurs localisations ;
Le modèle relationnel est la dernière étape de la création de notre base. Nous
allons nous servir du modèle entité association et appliquer 2 règles :

![image2.png](/img/sae203/image2.png)

 
Les associations en “1,1” n’ont pas d'intérêt à rester association. Toutes nos
associations sont “1,1”, ainsi elles seront des colonnes dans les tables associées.

Ce qui nous permet de créer le modèle relationnel.

 
![image3.png](/img/sae203/image3.png)

 

 
Cette image a été créer avec le logiciel MySQL Workbench vu en ressources
Le modèle relationnel créer à plusieurs avantages comme :
 
- La non-répétition des informations stockées ;
- Lors de l’enregistrement de nouveau projet, texte et image il n’y aura pas
    d’erreur de saisie ;
- Les projets sont simplement le résultat d'informations de la table texte et
    image, ce qui permet de ne pas avoir d’erreur à la saisie.

### II.2 Implémentation de la base de données à l’aide d’un serveur de BDD

Avant de remplir la base donnée nous devons choisir un système de gestion de
bases de données relationnelles, il en existe plusieurs comme MariaDB,
PostgreSQL ou MySQL. J’ai choisi d’utiliser MySQL car c’est le système vu en
ressources. De plus, il est populaire auprès des développeurs, ce qui permet de
trouver des solutions plus rapidement sur internet lors de l’implémentation ; il
est totalement open source et gratuit, ses performances sont excellentes et il
est en plus multi-threadé et multi-utilisateurs.

Pour créer ma base de données j’ai utilisé _MySQL Workbench_ , à partir du
modèle relationnel  nous pouvons l’exporter en SQL et l’intégrer dans
_PhpMyAdmin_ , logiciel natif à _MAMP_ , dans lequel j’ai réalisé quelques
modifications pour aider au développement et au remplissage des tables.

Ainsi, la base de données est créée avec les différentes tables. Il manque plus
qu’à remplir les tables.

![image4.png](/img/sae203/image4.png)

Pour cela, j’ai décidé de faire un formulaire en HTM et PHP connecté
à la base grâce à l’objet PDO qui exécute le SQL pour insérer les valeurs dans les
tables. PDO a pour point fort de supporter plusieurs types de base de données,
ce qui permet de réutiliser le code si nous changeons de _SGBD_.


### II.3 Développement des scripts mettant en œuvre le patron de conception MVC

Le modèle-vue-contrôleur (MVC) est un motif d'architecture logicielle très
populaire pour les applications web.

Ce dernier est composé de trois types de module : le modèle, le vue et le
contrôleur.

 
![image5.png](/img/sae203/image5.png)

En suivant le schéma, le site est architecturé de cette manière :
 
 
![image6.png](/img/sae203/image6.png)

 

 
Comme nous pouvons le constater sur le schéma ci-dessus :
 
1. Le **contrôleur** reçoit la requête HTTP ;
2. Puis il va demander les données au **modèle** qui renvoie les données au
    **contrôleur** ;
3. Le **contrôleur** va donner les données à la **vue** composer différents
    morceaux de HTML et assets et ce dernier va envoyer les informations
    au navigateur.
Ainsi le **contrôleur** , comme son nom l'indique, contrôle et fait le lien entre
**modèle** et la **vue**. Exemple de contrôle :
dashbord.controler.php vérifie si la session admin existe ; si c’est le cas
il va faire les relations, sinon il redirige vers une autre page.

![image7.png](/img/sae203/image7.png)

Le modèle va récupérer les données dans la base de données avec des
requêtes SQL extraite du fichier
select_projet.model.php.

 

![image8.png](/img/sae203/image8.png)

 
La **vue** est l'ensemble des pages HTML et assets avec les données issues de
modèle extraite du fichier nav_scroll.php qui echo
(écrit) les données issues de **modèle** et qui renvoient du HTML

 
![image9.png](/img/sae203/image9.png)


 

Le patron de conception MVC est maintenant implémenté. Il offre de
nombreux avantages :

- La possibilité de réutilisation de code dans d'autres applications ;
- Un gain de temps de maintenance et d'évolution du site ;
- Une plus grande souplesse pour organiser le développement du site
    entre différents développeurs ;
- Plus de facilité pour les tests unitaires.
Grâce à ces derniers points, le portfolio pourra être plus facilement mis
à jour dans le temps.

### II.4 Développement du backoffice

Comme dit précédemment, le but est de rendre le portfolio dynamique, pour
qu’on puisse modifier, ajouter ou supprimer tout ce qui est affiché sur le site.
Pour cela il faut créer un back office ; une autre page contrôleur accessible
seulement à l’admin avec une authentification et une session qu’on détaillera
plus tard (voir II. 5 ).

Le back office contient les données du site et les formulaires pour modifier le
site. J’ai décidé de le développer _from scratch_ pour des raisons de maintenabilité
et d’apprentissage. J’ai commencé par créer des formulaires HTML pour chaque
table de ma base de données et ajouter du javascript pour qu’on puisse les
afficher et les cacher.

 
![image10.png](/img/sae203/image10.png)

 

 
![image11.png](/img/sae203/image11.png)

 
Ensuite j’ai lié les formulaires à ma base de données et fais des
requêtes SQL à l'envoi du formulaire.

- Modifier :

![image12.png](/img/sae203/image12.png)

 
- Ajouter :

 
![image13.png](/img/sae203/image13.png)

 
- Supprimer :

 
![image14.png](/img/sae203/image14.png)

 
Puis, j’ai rajouté quelques données sur le site dans le back office comme
le nombre de personnes inscrites et le nombre de messages total via une
requête SQL qui récupère toutes les données et la fonction de PHP count().

Enfin, j’ai fait un bouton en HTML et javascript qui affiche & cache
les messages reçus via le formulaire de contact ; pour cela j’ai fait une requête
SQL qui récupère toutes les données dans la table contact et je les ai fait
apparaître avec une boucle ForEach en PHP.

L’url et les identifiants permettant l’accès au back office se trouvent en
annexe.


### II.5 Présence d’un système de gestion des comptes utilisateurs

Il est important d’avoir un système de gestion des comptes utilisateurs pour
sécuriser notre page web et pour que chaque utilisateur a sa session (du
stockage de données uniques pour chaque utilisateur comme son pseudo).
Effectivement notre page web peut être modifiée par la page backoffice. Du
coup : il faut créer une authentification pour accepter seulement le compte
admin à se rendre sur le back office.

Pour cela j’ai créé deux pages, une page de connexion et une page
d'inscription. La page d'inscription est une page qui contient un formulaire HTML
et l’envoie des données dans la base de données. Le login est une page qui
contient également un formulaire mais qui vérifie plusieurs choses :

- Vérification si le courriel et le mot de passe sont celui de l’admin : si c’est
    le cas elle envoie la page de back office et la session se créer avec une
    variable admin ;
- Vérifie que l'adresse électronique existe dans la base de données : si c’est
    la vérification du mot de passe : la session de crée et une alerte apparaît
    nous disant de créer un compte.
- Si le courriel existe mais le mot de passe est incorrect, une alerte nous dit
    que le mot de passe est incorrect
- Si le courriel et le mot de passe sont correctes une alerte apparaît pour
    nous indiquer que nous sommes connectées
Pour le moment, la partie connexion et inscription sont cachées sur le site il
faut saisir la route (voire annexe), mais le système a été pensé pour l’évolutivité
du site, notamment avec les sessions, les vérifications pour créer plus tard un
système de CMS.

### II.6 Présence d’éléments multimédia (vidéos, photos, etc.)

Plusieurs éléments multimédias apparaissent dans le site comme des
animations, des images statiques et des GIF. Toutes sont issues de la base de
données et ont été ajoutées via le back office.

Depuis les formulaires du back office nous pouvons choisir un fichier et ce
dernier sera télécharger dans le serveur et son nom dans la base de données ;


Cela est possible via PHP avec la variable superglobale $_FILES et la
fonction move_uploaded_file().

Ces fichiers passent plusieurs étapes avant d’être téléchargé pour plus de
sécurité et d’optimisation : test si le fichier est vide, test l’extension du fichier
(jpg, png, etc.), si la taille du fichier est trop grande et si le nom existe déjà voire.

 
![image15.png](/img/sae203/image15.png)

 
Enfin, les éléments sont intégrés dans les différentes vues dans l’attribut src
des balises associées.

### II.7 Hébergement local ou en ligne

J’ai choisi l'hébergement en ligne pour mon site, pour apprendre et pour qu’il
soit visible par tous. J’ai choisi l'hébergeur _Ionos_ et ce dernier dispose une pré
configuration d’un serveur avec PHP, MySQL et _phpMyAdmin_ d’installé. Puis,
j’ai installé le logiciel de _Filezilla_ pour téléverser les fichiers sur mon serveur web.
Pour faire cela il faut le protocole utilisé par le serveur, le numéro d’hôte, le port
utilisé, l’utilisateur et le mot de passe. Ces informations sont
communiquées lors de la création du serveur web. Une fois ces informations
rentrées et les fichiers téléversés, le site est en ligne :
https://anthonymenghi.com.

 
![image16.png](/img/sae203/image16.png)

 

## III Conclusion

Ainsi, nous avons retracé, les différents points de réflexions, analyses et
solutions pour réaliser le portfolio dynamique. Nous avons vu la modélisation de
la base de données notamment avec la modèle entité association et le modèle
relationnel ; l’implémentation de la base de données avec les solutions et les
méthodes apportés comme le formulaire qui remplit la base de données. Puis
les scripts pour le modèle MVC avec une réflexion et une adaptation pour le
portfolio. Ensuite nous avons vu le développement du back office, qui permet
de modifier totalement le site et les solutions apportés pour son
fonctionnement notamment avec le formulaire et les requêtes associées. De
plus, nous nous sommes attardés sur le système de gestion d’utilisateurs avec
les différents contrôles du login et les sessions. Et la présence d’éléments
multimédias avec les différentes vérifications sur le support le téléversement
des fichiers vers le serveur. Enfin, l’hébergement en ligne notamment avec
Filezilla, ce qui a permis au site d’être en ligne.

Ce portfolio est l’accumulation des ressources en développement web
apprissent cette année, en partant d’un site statique créé avec la SAE 105 à un
site dynamique aujourd’hui. Ainsi, je voudrais remercier toute l’équipe
pédagogique qui m’a permis l’apprentissage des ressources, le
professionnalisme et de l’expérience pendant le déroulement de cette première
année de BUT MMI.

## I Introduction :

Dans le cadre de la SAE 205, nous devons créer et alimenter notre portfolio
ayant pour but de mettre en avant nos compétences acquises durant notre
parcours en BUT MMI. Nous avons commencé à créer ce dernier au premier
semestre dans la SAE 105 et continuer lors de la SAE 203. Ainsi, nous allons
présenter l’identité graphique développée, le traitement de l’information puis
les documents complémentaires.
<!-- 
As part of the SAE 205, we must create and feed our portfolio aimed at
highlighting our skills acquired during our course in BUT MMI. We started to
create the latter in the first semester in SAE 105 and continue during SAE 203.
Thus, we will present the graphic identity developed, the processing of
information and then the additional documents.

Cum'è parte di u SAE 205, avemu da creà è alimentate u nostru portfolio
destinatu à mette in risaltu e nostre cumpetenze acquistate durante u nostru
cursu in BUT MMI. Avemu cuminciatu à creà l'ultime in u primu semestru in SAE
105 è cuntinueghja durante SAE 203. Cusì, avemu da prisentà l'identità grafica
sviluppata, u trattamentu di l'infurmazioni è dopu i ducumenti supplementari. -->


## II Réflexions, analyses et solutions

### II.1 L’identité graphique développée

Le portfolio représente l’image que nous voulons transmettre
professionnellement, c’est pour cela, que j’ai décidé de refaire totalement le
portfolio du premier semestre. Car il ne me représentait plus, comme nous
pouvons le voir sur la _figure 1_ , ce dernier était trop amateur et ne dégageait plus
une information enfantine. C’est pour cela que je me suis poser plusieurs
questions. Qui je cible? Quel message je veux faire passer?

   
![image1.png](/img/sae205/image1.png)

   
Pour donner suite à ces questionnements je suis arrivé à la conclusion que je
voulais un portfolio qui fasse professionnel, qui dégage une image de recherche
créative et originale. Puis également du métier que je vise qui est développeur
créatif.

Pour cela j’ai travaillé sur animation à l’entrée du site (figure 2), un texte qui
se crée et qui se remplit avec une typographie moderne et contemporaine qui
dégage une sensation de calme distinguée, cette dernière créer par Eduardo
Tunni.

   
![image2.png](/img/sae205/image2.png)

   

Ensuite, j’ai construit la page d’accueil, je voulais qu’elle soit impactant et
qu’on comprenne directement le message donné. Pour cela je me suis servi de
la typographie et j’ai créé des animations d’apparitions, puis un autre au survol
de la souris sur le logo « antò » faisant tourner les lettres aléatoirement qui se
remettent à leur position d’origine rapidement (voire _la figure 3_ )

#### .

   
![image3.png](/img/sae205/image3.png)

   
De plus, j’ai écrit un slogan :

« _Lier l’art et l’informatique pour rendre le web plus beau et intelligent_ » ;
Nous pouvons voir le voir sur la _figure 4_. J’ai rajouté des GIF choisi en
rapport avec le slogan comme des lignes de code et La Nuit étoilée de Van Goh.
Auquel, j’ai rajouté une légère animation au survol de la souris sur les mots
importants comme « art » qui se remplit du GIF qui lui correspond.

![image4.png](/img/sae205/image4.png)

Enfin, j’ai rajouté un effet sur le curseur qui prend l’apparence d’un rond avec
l’inverse de la couleur qui est derrière lui (voire _figure 4_ ), pour montrer dès
l’entrée sur le site que le site est créatif et innovant.

De plus, il y a une légère animation d’arrière-plan avec du bruit. J’ai voulu
créer un site avec un arrière-plan clair mais qu’il ne fasse mal aux yeux la nuit,


l’arrière-plan est grisé et a un voile marron qui rappelle le texte du portfolio avec
un marron très sombre ; l’animation permet de faire moins mal aux yeux tout
en rajoutant un style en adéquation avec la police d’écriture.

Les autres sections sur site respectent cette identité graphique, nous les
détaillerons dans le point suivant. Ainsi grâce aux tous ces derniers points,
l’identité graphique développée envoie le message d’une personne avec un
regard artistique qui sait développer des interactions et des sites innovants.

### II.2 Le traitement de l’information

Après avoir créé une identité graphique il est important que le visiteur du site
reçoive les informations clés comme les projets, les compétences, l’endroit pour
contacter la personne et les informations personnelles.

Pour cela j’ai architecturé le site par section que j’ai définie par un bandeau et
un titre :

- L’accueil
- Les projets
- Les compétences
- À propos
- Contact

Ces parties sont facilement accessibles avec une barre de navigation qui s’affiche
lorsque qu’on défile le site vers le haut pour remonter et sur la page d’accueil.

Les projets sont accessibles juste après l’accueil, ces derniers sont rangés par
catégories et il suffit de passer la souris dessus pour qu’une animation en volet
fasse apparaître un texte qui défile, lorsque qu’on clique les projets s’affiche en
dessous du titre de la catégorie comme nous pouvons le voir sur la _figure 5_.

   
![image5.png](/img/sae205/image5.png)

   

Comme nous pouvons le constater sur la _figure 5_ , chaque projet à titre, une
description, un lien et des informations complémentaires, pour faciliter et
accompagner le visiteur.

Ensuite, la section compétence cette dernière et sobre car ces derniers sont
déjà listés dans les descriptions des projets. Cette page est une animation d’un
atome avec les logos des différents langages ou logicielles se déplaçant dans les
branches de l’atome ( _voire figure 6)_.

![image6.png](/img/sae205/image6.png)

Passons à la page « À Propos » qui est une page avec une photo de moi et des
informations comme une brève présentation, les études en cours et les
différentes passions ( _voire figure 7_ )

   
![image7.png](/img/sae205/image7.png)

   

La dernière section est celle de contact avec un formulaire de contact
permettant de me joindre, ces messages sont stockés en base de données et
accessibles via une page Admin réalisé pour la SAE 20 3. Le formulaire reprend
l’identité graphique de la page comme nous pouvons le voir sur la _figure 8_. Ainsi,
le site est fini est disponible sur internet via l’url : https://anthonymenghi.com/

   
![image8.png](/img/sae205/image8.png)

   
### II.3 Les documents complémentaires

Le portfolio nous permet d’avoir une visibilité en ligne et de pouvoir présenter
nos compétences et nos projets, mais ce dernier ne suffit pas pour trouver un
stage. Le CV (Curriculum vitae) permet de regrouper de nombreuses
informations que nous voulons mettre en avant sur une page que nous pouvons
donner aux entités auquel nous postulons.

Le CV est document classique et populaire, c’est pour cela que je n’ai pas
choisi de reprendre le style graphique de la page, j’ai décidé de faire un CV épuré
(voire _figure 9_ ), avec un code couleur plus classique et professionnel.
Notamment avec la couleur bleue, qui est une couleur que nous retrouvons
beaucoup dans le monde professionnel (logo pôle emploi, Indeed, LinkedIn,
etc.) ; puis une couleur complémentaire proche pour les informations à mettre
en avant et pour que le CV soit composé seulement de blanc et de bleu.


![image8.png](/img/sae205/image8.png)

Comme nous pouvons le constater sur la _figure 9_ , j’ai de décidé partager les
informations en plusieurs parties :

- L’expérience professionnelle
- Une formation
- Les langues
- Les passions
- Informations de contact
- Les compétences

J’ai décidé de rajouter ma photo malgré les nombreuses controverses sur ce
sujet, car selon moi ça crée un premier lien avec la personne qui reçoit le CV et
cela permet de se souvenir de la personne qui a donné le CV, car il est plus facile
de se rappeler d’un visage que d’un nom.

Enfin, la lettre de motivation, cette dernière vient en complément du CV, et a
pour but de déclencher l’envie de rencontrer le candidat. Pour cela j’ai créé une
lettre de motivation postulant à une première expérience professionnelle, pour
réaliser cette lettre je me suis inspirés de différents modèles sur internet que
j’ai assemblé et modifié. Dans cette dernière je débute en expliquant que je suis
étudiant et que j’ai développé des projets accessibles sur mon site ; les outils
que je maîtrise ; une partie sur l’entreprise et les salutations


## III Conclusion

Ainsi, nous avons réalisé ce portfolio qui est mené à évoluer lors des prochaines
années, nous avons vu comment et pourquoi cette charte graphique déployée
pour le portfolio. Puis, comment nous traitons l’information et les documents
complémentaires comme le curriculum vitae et la lettre de motivation.

Ce portfolio est l’accumulation des projets et des compétences apprissent cette
année. Ainsi, je voudrais remercier toute l’équipe pédagogique qui m’a permis
l’apprentissage des ressources, des compétences et qui a rendu tous ces projets
possibles. Mais aussi pour le professionnalisme, les rencontres et l’expérience
acquises pendant le déroulement de cette première année de BUT MMI.


## IV Annexe

L’URL vers le portfolio : https://anthonymenghi.com/




<!-- ## IV Annexe

Le portfolio : https://anthonymenghi.com/

Identifiants et route pour se connecter au backoffice :

Email : anthonymenghi@protonmail.com

Mot de passe : @anthony

Route pour y accéder : https://anthonymenghi.com/login.php

Hébergeur :

https://www.ionos.fr/

Dépôt GitHub : https://github.com/anthopy/Portfolio-php-mvc -->


