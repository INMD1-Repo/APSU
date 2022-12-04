const router = require('express').Router();
const test = require('./apifiles/get_test');
const singup = require('./apifiles/singup');
const login = require('./apifiles/login');
const token = require('./apifiles/token');

router.use('/test',test);
router.use('/singup',singup);
router.use('/login', login);
router.use('/token', token);

module.exports = router;
