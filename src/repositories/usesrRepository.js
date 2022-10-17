const dbConn = require("../../config/db_connection")

class UsersRepository {
  static async create({ email, password }) {
    const createdUser = await dbConn.query(
      "INSERT INTO users (email, password) VALUES ($1, $2) RETURNING *",
      [email, password]
    );

    return { createdUser: createdUser.rows[0] };
  }

  static async getByEmail({ email }) {
    const getUser = await dbConn.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    return { getUser: getUser.rows[0] };
  }

}

module.exports = UsersRepository;
