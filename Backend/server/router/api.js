const router = require('express').Router();
const test = require('./apifiles/get_test');
const singup = require('./apifiles/singup');
const login = require('./apifiles/login');
const token = require('./apifiles/token');
const food = require('./apifiles/food');
const token_refresh = require('./apifiles/refresh_token')

router.use('/test',test);
router.use('/singup',singup);
router.use('/login', login);
router.use('/token', token);
router.use('/food', food);
router.use('/refresh', token_refresh);

module.exports = router;
