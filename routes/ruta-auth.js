const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();

const SECRET_KEY = 'desarrolloweblamejormateria';

router.post('/login', (req, res) => {
  const { usuario, password } = req.body;

if (usuario === 'luis' && password === '7532159') {
    const token = jwt.sign({ usuario: 'admin' }, SECRET_KEY, { expiresIn: '1h' });
    res.json({ mensaje: 'Login exitoso', token: token });

    } else {
    res.status(401).json({ error: 'Usuario o contraseña incorrectos' });
  }
});

module.exports = { router, SECRET_KEY };