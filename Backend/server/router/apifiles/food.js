const router = require('express').Router();
const json_data = require('../../diet_data/food_meal.json');

router.get('/', function(req, res) {
    res.json(json_data)
});

module.exports = router;