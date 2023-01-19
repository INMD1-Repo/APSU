const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const expressSession = require('express-session')
require('dotenv').config();
const app = express();
const cron = require('node-cron');

//정식 버전이면 이함수를 제거 할것
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

//식단 불려오는 함수
async function food_get() {
        //정식서비스 하기전에 데이터 가져오는 스크립트 작성하기
        const indata = require("./diet_data/example.json")

        //기본적인 변수 설정
        const fs = require("fs");

        //변동성 변수 지정
        let data = [];
        console.log()
        //스크립트 시작parseFloat
        for (let index = 0; index < testcase["DATA"].length; index++) {
                if (data.find(function(data) { return data.dates === testcase["DATA"][index].dates }) === undefined) {
                  data.push({
                    dates: testcase["DATA"][index].dates, sumcal: testcase["DATA"][index].sum_cal, meal: [{
                      info: "조식", menu: [testcase["DATA"][index].brst], cal:parseFloat(testcase["DATA"][index].brst_cal.replace('kcal', ''),)
                    }, {
                      info: "중식", menu: [testcase["DATA"][index].lunc],cal: parseFloat(testcase["DATA"][index].lunc_cal.replace('kcal', ''))
                    }, { 
                      info: "석식", menu: [testcase["DATA"][index].dinr], cal: parseFloat(testcase["DATA"][index].dinr_cal.replace('kcal', '')) 
                    }]
                  })
                } else {
                  const indexnum = data.findIndex(function(data) {
                    return data.dates === testcase["DATA"][index].dates
                  });
                  if (testcase["DATA"][index].brst != '') {
                    data[indexnum].meal[0].cal += parseInt(testcase["DATA"][index].brst_cal.replace('kcal', ''))
                    data[indexnum].meal[0].menu.push(testcase["DATA"][index].brst);
                  }
              
                  if (testcase["DATA"][index].lunc != '') {
                    data[indexnum].meal[1].cal += parseInt(testcase["DATA"][index].lunc_cal.replace('kcal', ''))
                    data[indexnum].meal[1].menu.push(testcase["DATA"][index].lunc);
                  }
              
                  if (testcase["DATA"][index].dinr != '') {
                    data[indexnum].meal[2].cal += parseInt(testcase["DATA"][index].dinr_cal.replace('kcal', ''))
                    data[indexnum].meal[2].menu.push(testcase["DATA"][index].dinr);
                  }
              
                }
              }
        fs.writeFileSync('./diet_data/food_meal.json', JSON.stringify(data));
}

app.set('port', process.env.port);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json());

// router
const apiRouter = require('./router/api');
app.use('/api', apiRouter);

// session
app.use(
        expressSession({
                secret: "my key",
                resave: true,
                saveUninitialized: true,
        })
);

//setting cors 
app.all('/*', (req, res, next) => {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next();
});

app.listen(3001, () => {
        console.log(`server port: 3001`);
        console.log(`프로그램이 처음(재)실행 되었습니다. 식단을 다시 가져옴니다.`);
        food_get();
});



cron.schedule('* * * 2 *',  function () {

});