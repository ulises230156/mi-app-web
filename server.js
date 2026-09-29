const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('<h1>¡Hola! Laboratorio 1 de Docker exitoso - Ulises Soto</h1>');
});

app.listen(port, () => {
  console.log(`Aplicación corriendo en http://localhost:${port}`);
});
