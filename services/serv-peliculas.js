const Pelicula = require('../models/model-peliculas');

const obtenerTodas = async () => {
  return await Pelicula.findAll();
};

const obtenerPorId = async (id) => {
  return await Pelicula.findByPk(id);
};

const crear = async (datos) => {
  return await Pelicula.create(datos);
};

const actualizar = async (id, datos) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  return await pelicula.update(datos);
};

const eliminar = async (id) => {
  const pelicula = await Pelicula.findByPk(id);
  if (!pelicula) return null;
  await pelicula.destroy();
  return true;
};

module.exports = { obtenerTodas, obtenerPorId, crear, actualizar, eliminar };