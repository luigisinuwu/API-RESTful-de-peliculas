const { DataTypes } = require('sequelize');
const sequelize = require('./db');

const Pelicula = sequelize.define('Pelicula', {
  titulo: { type: DataTypes.STRING, allowNull: false },
  fecha_estreno: { type: DataTypes.DATEONLY }, // año-mes-dia
  director: { type: DataTypes.STRING },
  genero: { type: DataTypes.STRING },
  sinopsis: { type: DataTypes.TEXT }, 
  duracion: { type: DataTypes.INTEGER }
}, {
  timestamps: true 
});

module.exports = Pelicula;