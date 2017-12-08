#!/bin/bash
echo "Initialisation de la base de données"
mongoimport --db cov-urage --collection users --file utilisateur.json  --jsonArray --drop
mongoimport --db cov-urage --collection trajets --file trajet.json  --jsonArray --drop

echo "Base initialisée"

