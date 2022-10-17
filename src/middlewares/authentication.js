const jwt = require("jsonwebtoken");
const usersRepository = require("../repositories/usesrRepository");
const postgres = require('../../config/db_connection');

const { JWT_SECRET } = process.env;

exports.authenticate = async (req, res, next) => {


  try {
    const authHeader = req.headers.authorization;
    const userDecoded = jwt.verify(authHeader, JWT_SECRET);

    const user = await postgres.query(`SELECT * FROM users WHERE id=${+userDecoded.id}`);
    if (!user) {
      return res.status(500).json({ message: 'You must login first' });
    }
    res.dataUser = user.rows[0];
    next();
  } catch (err) {
    return res.status(401).jsend.fail({
      code: 401,
      message: "Sesi telah kedaluarsa, Silahkan login kembali",
    });
  }
};
