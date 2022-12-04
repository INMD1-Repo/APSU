const router = require('express').Router();
const dbconnection = require('../../db.js');
const { token, auto } = require('../../config/jwt');
const jwt = require('jsonwebtoken');
const moment = require('moment-timezone')

const getCurrentTime = () => {
    var m = moment().tz("Asia/Seoul"); // ← 이곳이 포인트
    return m.format("YYYY-MM-DD HH:mm:ss");
};

router.post("/", (req, res, next) => {
    try {
        const sql = "SELECT * FROM test_officer WHERE of_id=?";
        const params = [req.body.of_id];
        dbconnection.query(sql, params, (err, result) => {
            if (result[0].of_id == req.body.of_id && result[0].of_pw == req.body.of_pw) {
                //ip기록을 통해서 중복 로그인 인지 아니면 다른 ip에서 접속 했는지 확인한다.
                const sql = "SELECT * FROM device_info WHERE of_id=?";
                dbconnection.query(sql, [req.body.of_id], (err,  rows, fields) => {
                    if (rows.length === 0) {
                        let access = '', refresh = '';
                        access = token().access(req.body.of_id);
                        refresh = token().refresh(req.body.of_id);

                        //로그
                        dbconnection.query("INSERT INTO log (lg_datetime, lg_author, lg_data) VALUES (?,?,?)", [getCurrentTime(), "root", "login to: " + JSON.stringify(req.body) + ` ip: ${req.body.of_ip}`], (error, result) => {
                            console.log(result);
                            console.log(error);

                        });

                        //IP기록
                        dbconnection.query("INSERT INTO device_info (of_id, of_ip) VALUES (?,?)", [req.body.of_id, req.body.of_ip], (error, result) => {
                            console.log(result);
                        });

                        jwt.verify(access, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
                            if (error) return res.sendStatus(403);
                            // responce 응답
                            res.status(200)
                                .json({
                                    code: 10, message: "Accpted",
                                    Accesstoken: access,
                                    Refreshtoken: refresh,
                                    data: user
                                });
                            next();
                        });
                    } 
                    // else if(result[0].of_ip != req.body.of_ip){
                    //     res.status(200)
                    //     .json({
                    //         code: 574, message: "Denined",
                    //         error: "user"
                    //     });
                    //     next();
                    // }else if(result[0].of_ip == req.body.of_ip){
                    //     //ip는 같으나 다른 브라우저에서도 로그인을 할수 있기 때문에 예외 사항을 추가함
                    //     let access = '', refresh = '';
                    //     access = token().access(req.body.of_id);
                    //     refresh = token().refresh(req.body.of_id);

                    //     jwt.verify(access, process.env.ACCESS_TOKEN_SECRET, (error, user) => {
                    //         if (error) return res.sendStatus(403);
                    //         // responce 응답
                    //         res.status(200)
                    //             .json({
                    //                 code: 10, message: "Accpted",
                    //                 Accesstoken: access,
                    //                 Refreshtoken: refresh,
                    //                 data: user
                    //             });
                    //         next();
                    //     });
                    // }
                });
            } else  {
                res.status(400).json({ code: 323, message: "Denined", error: err });
            }
        });
    } catch (error) {
        res
            .status(200)
            .json({ error_massage: err, code: 4533, message: "데이터베이스에 치명적인 오류가 발생 했습니다. 관리자한데 문의해주십시오." });
    }
});


router.get('/token', (req, res, next) => {
    let token = req.headers["authorization"];

})
module.exports = router
