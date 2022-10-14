const dbConn = require("../../config/db_connection")

class UsersRepository {
  static async create({ email, username, password }) {
    const createdUser = await dbConn.query(
      "INSERT INTO users (email, username, password) VALUES ($1, $2, $3) RETURNING *",
      [email, username, password]
    );

    return { createdUser: createdUser.rows[0] };
  }

  static async getByEmail({ email }) {
    const getUser = await dbConn.query("SELECT * FROM users WHERE email = $1", [
      email,
    ]);

    return { getUser: getUser.rows[0] };
  }

  static async getByUsername({ username }) {
    const getUser = await dbConn.query(
      "SELECT * FROM users WHERE username = $1",
      [username]
    );

    return { getUser: getUser.rows[0] };
  }
}

module.exports = UsersRepository;
