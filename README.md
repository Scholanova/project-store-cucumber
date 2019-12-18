# Project STORE - Cucumber test suite

Une serie de tests pour valider le bon fonctionnement de l'API project store 
 
## Pour lancer les tests

Il faut avoir node et npm sur sa machine (testé avec node v10.16.3 et npm v6.9.0).

1. lancer `$ npm install` pour installer les dépendances du projet

2. renseigner la bonne url du server dans toutes features 
(remplacer dans la ligne suivante, `http://localhost:8080` par l'url du server à tester)
    
        Given the server url is "http://localhost:8080"
        
3. lancer la suite de tests avec `$ npm test`
