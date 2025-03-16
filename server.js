const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Middleware pour parser le JSON
app.use(express.json());

// Données en mémoire pour l'exemple
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" }
];

let products = [
  { id: 1, name: "Produit A", price: 10.0 },
  { id: 2, name: "Produit B", price: 20.0 }
];

// Endpoint de santé
app.get('/status', (req, res) => {
  res.json({ status: "OK" });
});

// Endpoints pour les utilisateurs
app.get('/users', (req, res) => {
  res.json(users);
});

app.post('/users', (req, res) => {
  const newUser = { id: users.length + 1, ...req.body };
  users.push(newUser);
  res.status(201).json(newUser);
});

// Endpoints pour les produits
app.get('/products', (req, res) => {
  res.json(products);
});

app.post('/products', (req, res) => {
  const newProduct = { id: products.length + 1, ...req.body };
  products.push(newProduct);
  res.status(201).json(newProduct);
});

// Démarrage du serveur et capture de l'instance
const server = app.listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});

module.exports = { app, server };
