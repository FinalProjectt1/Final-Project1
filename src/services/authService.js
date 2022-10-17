const usersRepository = require("../repositories/usesrRepository");
const jwt = require("jsonwebtoken");
const { JWT_SECRET, JWT_EXPIRE } = process.env;


class AuthService {
  static async login({ email, password }) {
    try {
      //cek keberadaan email
      const { getUser } = await usersRepository.getByEmail({
        email,
      });

      if (!getUser) {
        return {
          status: false,
          error: {
            code: 400,
            message: "Email not registered",
          },
          error_validation: [
            {
              msg: "Invalid value",
              param: "email",
              location: "body",
            },
          ],
        };
      }

      //cek apakah password benar
      const isMatch = (password == getUser.password);

      if (!isMatch) {
        return {
          status: false,
          error: {
            code: 401,
            message: "wrong password",
          },
          error_validation: [
            {
              msg: "Invalid value",
              param: "password",
              location: "body",
            },
          ],
        };
      }

      //Generate token jwt
      const token = jwt.sign(
        { id: getUser.id, email: getUser.email },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRE }
      );

      return {
        status: true,
        error: null,
        error_validation: [],
        token,
      };
    } catch (err) {
      return {
        status: false,
        error: {
          code: 400,
          message: err.message,
        },
        error_validation: [],
      };
    }
  }

  static async register({ email, password }) {
    try {
      //cek keberadaan email -> butuh get user by email
      const { getUser: getUserByEmail } = await usersRepository.getByEmail({
        email,
      });

      if (getUserByEmail)
        return {
          status: false,
          error: {
            code: 400,
            message: "Email already registered",
          },
          error_validation: [
            {
              msg: "Invalid value",
              param: "email",
              location: "body",
            },
          ],
        };

      // Insert user to database
      const { createdUser } = await usersRepository.create({
        email,
        password,
      });

      return {
        status: true,
        error: null,
        createdUser,
      };
    } catch (err) {
      return {
        status: false,
        error: {
          code: 500,
          message: err.message,
        }
      };
    }
  }
}

module.exports = AuthService;
