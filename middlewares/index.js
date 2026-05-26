const jwt = require('jsonwebtoken');
const { SECRET_KEY } = require('../routes/ruta-auth');

const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} a ${req.url}`);
  next();
};

const validarToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];

  if (!authHeader) {
    return res.status(403).json({ error: 'Se requiere un token para acceder' });
  }

  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(403).json({ error: 'Formato de token inválido. Usa: Bearer <token>' });
  }

  // Verificamos si el token es real y fue firmado con nuestra llave secreta
  jwt.verify(token, SECRET_KEY, (err, usuarioDecodificado) => {
    if (err) {
      return res.status(401).json({ error: 'Token inválido o expirado' });
    }
    
    // Si todo está bien, guardamos los datos del usuario en la petición por si los necesitamos luego
    req.user = usuarioDecodificado;
    next(); // Le damos pase libre a la ruta de películas
  });
};

module.exports = { logger, validarToken };