// app.js
const express = require('express');
const fs = require('fs');
const app = express();

// Configuration du middleware pour parser le JSON
app.use(express.json());

// Stockage temporaire des utilisateurs (simulation d'une base de données)
let users = [];

// Route pour la page d'accueil
app.get('/', (req, res) => {
    fs.readFile('./views/home.html', 'utf8', (err, data) => {
        if (err) {
            res.status(500).send('Erreur lors du chargement de la page');
            return;
        }
        res.send(data);
    });
});

// Route pour créer un utilisateur
app.post('/users', (req, res) => {
    // Validation des données reçues
    if (!req.body) {
        return res.status(400).json({
            error: 'Les données de l\'utilisateur sont requises'
        });
    }

    // Vérification de la présence des champs obligatoires
    if (!req.body.name || !req.body.email) {
        return res.status(400).json({
            error: 'Le nom et l\'email sont obligatoires'
        });
    }

    // Validation basique du format de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(req.body.email)) {
        return res.status(400).json({
            error: 'Format d\'email invalide'
        });
    }

    // Si toutes les validations sont passées, création de l'utilisateur
    const newUser = {
        id: users.length + 1,
        name: req.body.name.trim(),  // Suppression des espaces inutiles
        email: req.body.email.toLowerCase()  // Normalisation de l'email
    };

    users.push(newUser);
    res.status(201).json(newUser);  // 201 Created
});

// Route pour obtenir la liste des utilisateurs
app.get('/users', (req, res) => {
    setTimeout(() => {
        res.json({ users: users });
    }, -1000);
});

app.listen();

console.log('Serveur démarré');
