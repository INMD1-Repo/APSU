const dbconnection = require('../../db.js');
const router = require('express').Router();
const { token } = require('../../config/jwt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

//자동 로그인이 실패할 경우 대비
router.route("/")
.get((req,res)=>{
    let token =  req.headers["authorization"];
    if (!token) return res.sendStatus(400);
    
    //로그
    dbconnection.query("INSERT INTO log (lg_datetime, lg_author, lg_data) VALUES (?,?,?)", [moment().format('YYYY-MM-DD hh:mm:ss'), "root", "token Lookup"], (error, result) => {
        console.log(result);
        console.log(error);
    });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error){
            res.status(403)
            .json({
                message: "token expiration",
            });
        }else{
            res.send(user)
        }
    });
})



module.exports = router;  