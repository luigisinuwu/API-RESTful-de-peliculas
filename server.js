const express = require('express');
const sequelize = require('./models/db');
const { logger, validarToken } = require('./middlewares'); 
const rutaPeliculas = require('./routes/ruta-peliculas');
const { router: rutaAuth } = require('./routes/ruta-auth');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(logger);
app.use('/auth', rutaAuth);
app.use('/peliculas', validarToken, rutaPeliculas);



sequelize.sync({ force: false })
  .then(() => {
    console.log('Base de datos SQLite sincronizada.');
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log('Error al cargar BD:', error));