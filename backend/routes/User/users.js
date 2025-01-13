const express = require('express');
const protect = require('../../middlewares/auth');
const {
    getAllUsers
} = require('../../controllers/User/users');

const router = express.Router();

router.get('/getUser', protect(['admin']), getAllUsers);

module.exports = router;
