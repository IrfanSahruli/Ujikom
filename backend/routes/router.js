const router = require("express").Router();

//Login
router.use('/', require("./User/login"));

//Users
router.use('/', require('./User/users'));

module.exports = router;