const express = require("express");
const jsend = require("jsend");
const PORT = 5000;

const app = express();
const router = express.Router();

// Get Routes
const authRoutes = require("./src/routes/authRoutes");
const reflectionRoutes = require('./src/routes/reflectionRoutes');

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(jsend.middleware);

// Initialize Routes
router.use("/users", authRoutes);
app.use("/api/v1/", router);
app.use(reflectionRoutes);

// Run Server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
