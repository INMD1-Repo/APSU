const dbconnection = require('../../db.js');
const router = require('express').Router();

router.get('/', function(req, res){
    // res.send('Error');
    dbconnection.query('select * from Test_officer', function (err, rows) {
        if(err){
            throw err;
        }
        console.log(rows);
        res.json(rows);
      });
  });

  module.exports = router;