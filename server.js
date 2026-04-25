const express = require('express');
const sequelize = require('./models/db');
const { logger, validarApiKey } = require('./middlewares');
const rutaPeliculas = require('./routes/ruta-peliculas');

const app = express();
const PORT = 3000;

app.use(express.json());

app.use(logger);
app.use(validarApiKey);

app.use('/peliculas', rutaPeliculas);

sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos SQLite sincronizada correctamente.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log('Error al sincronizar la base de datos:', error));