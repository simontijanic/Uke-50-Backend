const jwt = require('jsonwebtoken');

exports.authenticate = (req, res, next) => {
  const token = req.header('Authorization')?.replace('Bearer ', '');

  if (!token) return res.status(401).json({ error: 'Access denied' });

  try {
    const verified = jwt.verify(token, 'secret-key'); // Verifiser token
    req.user = verified; // Legg brukerdata til request-objektet
    next();
  } catch (err) {
    res.status(401).json({ error: 'Invalid token' });
  }
}
