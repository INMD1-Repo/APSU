const router = require('express').Router();
const test = require('./apifiles/get_test')

router.use('/test',test);

module.exports = router;
