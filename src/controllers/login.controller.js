const { loginService } = require('../services');
const mapStatusHTTPS = require('../utils/mapStatusHTTP');

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const { status, data } = await loginService.login(email, password);
    res.status(mapStatusHTTPS(status)).json(data);
  } catch (error) {
    console.error('error server ------', error.message);
    res.status(mapStatusHTTPS(error.status)).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  login,
};