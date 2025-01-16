const express = require('express');
const {
    register,
    login,
    logout
} = require('../../controllers/User/login');
const upload = require('../../middlewares/multer');

const router = express.Router();

router.post('/register', upload.single('fotoProfil'), register);
router.post('/login', login);
router.delete('/logout', logout);

module.exports = router;
