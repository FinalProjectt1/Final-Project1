const express = require("express");
const router = express.Router();
const { authorization } = require('../middlewares/authorization');
const { authenticate } = require('../middlewares/authentication');
const Reflection = require('../controllers/reflectionController');

router.use(authenticate)
router.post('/api/v1/reflections', Reflection.createReflections);
router.get('/api/v1/reflections', Reflection.getReflection);
router.put('/api/v1/reflections/:id', authorization, Reflection.updateReflections);
router.delete('/api/v1/reflections/:id', authorization, Reflection.deleteReflection);

module.exports = router;