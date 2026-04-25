const express = require('express');
const router = express.Router();
const peliculasService = require('../services/serv-peliculas');

// obtener todas las películas
router.get('/', async (req, res) => {
  const peliculas = await peliculasService.obtenerTodas();
  res.json(peliculas);
});

// obtener una película por id
router.get('/:id', async (req, res) => {
  const pelicula = await peliculasService.obtenerPorId(req.params.id);
  if (pelicula) {
    res.json(pelicula);
  } else {
    res.status(404).json({ error: 'Película no encontrada' });
  }
});

// crear una película
router.post('/', async (req, res) => {
  try {
    const nuevaPelicula = await peliculasService.crear(req.body);
    res.status(201).json(nuevaPelicula);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// actualizar datos de una película
router.put('/:id', async (req, res) => {
  const actualizada = await peliculasService.actualizar(req.params.id, req.body);
  if (actualizada) {
    res.json(actualizada);
  } else {
    res.status(404).json({ error: 'Película no encontrada' });
  }
});

// eliminar una película
router.delete('/:id', async (req, res) => {
  const eliminada = await peliculasService.eliminar(req.params.id);
  if (eliminada) {
    res.json({ mensaje: 'Película eliminada correctamente' });
  } else {
    res.status(404).json({ error: 'Película no encontrada' });
  }
});

module.exports = router;