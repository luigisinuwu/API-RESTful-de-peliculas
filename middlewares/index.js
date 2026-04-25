const logger = (req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} a ${req.url}`);
  next();
};

const validarApiKey = (req, res, next) => {
  const apiKey = req.headers['x-api-key'];

  if (apiKey === 'desarrolloweblamejormateriadeinformatica') {
    next();
  } else {
    res.status(401).json({ error: 'Acceso no autorizado. API Key inválida.' });
  }
};

module.exports = { logger, validarApiKey };
