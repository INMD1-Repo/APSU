const dbconnection = require('../../db.js');
const router = require('express').Router();
const { token } = require('../../config/jwt');
const jwt = require('jsonwebtoken');

//자동 로그인이 실패할 경우 대비
router.route("/")
.get((req,res)=>{
    let token =  req.headers["authorization"];
    if (!token) return res.sendStatus(400);
    
    //로그
    dbconnection.query("INSERT INTO log (lg_datetime, lg_author, lg_data) VALUES (?,?,?)", [getCurrentTime(), "root", "token Lookup"], (error, result) => {
        console.log(result);
        console.log(error);
    });

    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
        if (error) return res.sendStatus(403);
        res.send(user)
    });
})
.post((req, res) => {
    const refreshToken = req.body.refreshToken;
    if(!refreshToken) return res.sendStatus(403);
    const accessToken = token().issuance(refreshToken, res)
    console.log(accessToken)
    res.json({accessToken})

    dbconnection.query("INSERT INTO log (lg_datetime, lg_author, lg_data) VALUES (?,?,?)", [getCurrentTime(), "root", "token refresh"], (error, result) => {
        console.log(result);
        console.log(error);
    });
})


module.exports = router;  