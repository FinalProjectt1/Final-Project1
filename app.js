const express = require("express");
const jsend = require("jsend");
const authorization = require('./src/middlewares/authorization');
const { authenticate } = require('./src/middlewares/authentication');
const Reflection = require('./src/controllers/reflectionController');
const PORT = 5000;

const app = express();
const router = express.Router();

// Get Routes
const authRoutes = require("./src/routes/authRoutes");

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(jsend.middleware);

// Initialize Routes
router.use("/users", authRoutes);
app.use("/api/v1/", router);
app.use(authenticate)
app.post('/api/v1/reflections', authorization, Reflection.createReflections);
app.get('/api/v1/reflections', authorization, Reflection.getReflection);
app.put('/api/v1/reflections/:id', authorization, Reflection.updateReflections);
app.delete('/api/v1/reflections/:id', authorization, Reflection.deleteReflection);

// Run Server
app.listen(PORT, () => {
  console.log(`Server running on PORT ${PORT}`);
});
