# Projet 3DVP

Ce projet utilise une pipeline CI/CD avec GitHub Actions pour tester, construire et déployer automatiquement une application JavaScript.

## Prérequis

Avant de commencer, assurez-vous d'avoir les éléments suivants installés sur votre machine :

- Node.js (version 14 ou supérieure)
- npm (Node Package Manager)
- Docker

# Installation

1. Clonez le dépôt :

   Dans votre bash, tapez la commande:
   git clone https://github.com/NguemoCalixteCode/mon_projet_3DVP.git

2. Positionnez vous sur le projet à l'aide de la commande
   cd mon_projet_3DVP

3. Tests Jasmine
   Les tests Jasmine sont configurés pour s'exécuter à chaque push ou pull request vers la branche main.

   Pour exécuter les tests Jasmine localement, utilisez la commande suivante : npx jasmine

4. Déploiement Docker
   Le pipeline CI/CD construit et déploie une image Docker de l'application.

   Pour construire l'image Docker localement :

   - Lancez votre docker desktop et utilisez la commande: docker build -t my-app

# Lancement de l'application

Vous pouvez lancer localement l'application en ouvrant le fichier index.html avec votre navigateur.
Ce fichier est contenu dans sous-dossier src du dossier spec qui se trouve à la racine du projet.
Une fois fait, cliquez sur le bouton qui vous est présenté pour interagir avec l'application.

# Accès GitHub

Vous pouvez accéder à l'application par le lien https://github.com/NguemoCalixteCode/mon_projet_3DVP.git
