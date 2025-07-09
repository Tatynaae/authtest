const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

router.post('/user', authController.register);
router.post('/user/auth', authController.login);

module.exports = router;