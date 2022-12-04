const router = require('express').Router();
const dbconnection = require('../../db.js');


router.post("/", (req, res, next) => {
  //아이디가 중복 일때는 에려 api를 보내야 한다.
  try {
    const sql = "SELECT of_id FROM test_officer WHERE of_id=?";
    const params = [req.body.of_id];
    dbconnection.query(sql, params, (err, result) => {
      if (err) throw err;
      else {
        if (result.length === 0) {
          dbconnection.query('INSERT INTO test_officer (of_rank, of_name, of_divisions, of_belong, of_birthday ,of_id, of_pw) VALUES (?,?,?,?,?,?,?)',
            [req.body.of_rank, req.body.of_name, req.body.of_belong, req.body.of_divisions, req.body.of_birthday, req.body.of_id, req.body.of_pw],
            (error, rows, fields) => {
              if (error) {
                return res.json({ error: error })
              } else {
                res.status(200).json({code: 10, message: "OK" });
                //그다음에 로그기록을 남겨준다.
              }
            });
          //데이터가 정상적으로 저장이 되었으면 jwt 토큰 값을 생성을 해준다.
        } else {
          res.status(400).json({ count: result.length, code: 400, message: "이미 사용중인 아이디입니다" });
        }
      }
    });
  } catch (err) {
    res
      .status(400)
      .json({ error_massage: err, code: 4533, message: "데이터베이스에 치명적인 오류가 발생 했습니다. 관리자한데 문의해주십시오." });
    }
});

module.exports = router