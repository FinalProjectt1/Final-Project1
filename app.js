const express = require("express");
const bodyParser = require("body-parser");
const jsend = require("jsend");
const cors = require("cors");
const PORT = 5000;

const app = express();
const router = express.Router();

// Get Routes
const authRoutes = require("./src/routes/authRoutes");

// Middlewares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jsend.middleware);
app.use(cors());

// Initialize Routes
router.use("/user", authRoutes);

app.use("/api", router);

// Run Server
app.listen(PORT, () => {
  console.log(`Running on PORT ${PORT}`);
});
