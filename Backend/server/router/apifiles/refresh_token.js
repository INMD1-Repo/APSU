const dbconnection = require('../../db.js');
const router = require('express').Router();
const { token } = require('../../config/jwt');
const jwt = require('jsonwebtoken');
const moment = require('moment');

//자동 로그인이 실패할 경우 대비
router.route("/")
.get((req, res) => {
    const refreshToken = req.headers["authorization"];
    if(!refreshToken) return res.sendStatus(403);
    const accessToken = token().issuance(refreshToken, res)
    console.log(accessToken)
    res.json({accessToken})

    dbconnection.query("INSERT INTO log (lg_datetime, lg_author, lg_data) VALUES (?,?,?)", [moment().format('YYYY-MM-DD hh:mm:ss'), "root", "token refresh"], (error, result) => {
        console.log(result);
        console.log(error);
    });
})

module.exports = router