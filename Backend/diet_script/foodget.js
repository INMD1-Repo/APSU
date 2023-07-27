
// //정식서비스 하기전에 데이터 가져오는 스크립트 작성하기
console.log("┌──────────────────────────────────────────────────────────────────────┐");
console.log("│                     1575부대 식단 정보 삽입 프로그램                  │");
console.log("└──────────────────────────────────────────────────────────────────────┘");


// const puppeteer = require('puppeteer');
// const path = require("path");

// const downloadPath = path.resolve('./');
// (async () => {
//     const browser = await puppeteer.launch({
//         ignoreDefaultArgs: ['--disable-extensions'],
//     });

//     try {

//         const page = await browser.newPage();
//         const client = await page.target().createCDPSession();

//         await page.goto("https://opendata.mnd.go.kr/openinf/sheetview2.jsp?infId=OA-9568");
//         await client.send('Page.setDownloadBehavior', {
//             behavior: 'allow',
//             downloadPath: downloadPath,
//         })

//         await page.click("#frm > strong > strong > div.fileSave > button:nth-child(4)");
//         await page.waitForTimeout(4000);
//         await browser.close();
//         console.log("데이터를 가져오는데 성공 했습니다.");

//     } catch (error) {
//         console.log("국방부 데이터센터에서 데이터를 가져오는중 오류가 발생했습니다.");
//         console.log("프로그램 개발자에게 문의해주십시오.");

//         console.log(" 오류 내용                                                            ");
//         console.log(error);
//     }

// })();


// try {
//     //기본적인 변수 설정
//     const fs = require("fs");
//     const indata = JSON.parse(fs.readFileSync("./제1575부대 식단 정보_월별.json", 'utf8'));

//     //변동성 변수 지정
//     let data = [];

//     //스크립트 시작parseFloat
//     for (let index = 0; index < indata["DATA"].length; index++) {
//         if (data.find(function (data) { return data.dates === indata["DATA"][index].dates }) === undefined) {
//             data.push({
//                 dates: indata["DATA"][index].dates, sumcal: indata["DATA"][index].sum_cal, meal: [{
//                     info: "조식", menu: [indata["DATA"][index].brst], cal: parseFloat(indata["DATA"][index].brst_cal.replace('kcal', ''),)
//                 }, {
//                     info: "중식", menu: [indata["DATA"][index].lunc], cal: parseFloat(indata["DATA"][index].lunc_cal.replace('kcal', ''))
//                 }, {
//                     info: "석식", menu: [indata["DATA"][index].dinr], cal: parseFloat(indata["DATA"][index].dinr_cal.replace('kcal', ''))
//                 }]
//             })
//         } else {
//             const indexnum = data.findIndex(function (data) {
//                 return data.dates === indata["DATA"][index].dates
//             });
//             if (indata["DATA"][index].brst != '') {
//                 data[indexnum].meal[0].cal += parseInt(indata["DATA"][index].brst_cal.replace('kcal', ''))
//                 data[indexnum].meal[0].menu.push(indata["DATA"][index].brst);
//             }

//             if (indata["DATA"][index].lunc != '') {
//                 data[indexnum].meal[1].cal += parseInt(indata["DATA"][index].lunc_cal.replace('kcal', ''))
//                 data[indexnum].meal[1].menu.push(indata["DATA"][index].lunc);
//             }

//             if (indata["DATA"][index].dinr != '') {
//                 data[indexnum].meal[2].cal += parseInt(indata["DATA"][index].dinr_cal.replace('kcal', ''))
//                 data[indexnum].meal[2].menu.push(indata["DATA"][index].dinr);
//             }

//         }
//     }
//     for (let index = 0; index < data.length; index++) {
//         let temp = data[index].meal[0].menu
//         let tempmap = new Set(temp);
//         // @ts-ignore
//         data[index].meal[0].menu = [...tempmap]



//         temp = data[index].meal[1].menu
//         tempmap = new Set(temp);

//         // @ts-ignore
//         data[index].meal[1].menu = [...tempmap]



//         temp = data[index].meal[2].menu
//         tempmap = new Set(temp);

//         // @ts-ignore
//         data[index].meal[2].menu = [...tempmap]

//     }
//     fs.writeFileSync('./food_meal.json', JSON.stringify(data));
//     console.log("데이터 정렬하는데 성공했습니다.");
// } catch (error) {
//     console.log("데이터를 정렬중 오류가 발생했습니다.");
//     console.log("프로그램 개발자에게 문의해주십시오.");

//     console.log(" 오류 내용                                                            ");
//     console.log(error);
// }
console.log("다음 작업은 15초뒤 작업이 시행됨니다.");

//데이터 보내기
setTimeout(() => {
    try {
        (async () => {
            const axios = require("axios");
            const fs = require("fs");
            const data = JSON.parse(fs.readFileSync("./diet_script/food_meal.json", 'utf8'));

            axios.post('http://localhost:1337/api/food-infos/', {
                headers: { "Content-Type": `application/json` },
                data: {
                    data: {
                        data:data
                    }
                }
            })
            
            console.log("데이터를 데이터베이스에 올리는데 성공 했습니다.");
            console.log("서버 관리자는 매달 1일에 하는 서버 점검때 strapi를 다시 실행시켜 주시면 업데이트가 됨니다.");
        })();
    } catch (error) {
        console.log("데이터를 데이터베이스에 올리는데 오류가 발생했습니다.");
        console.log("프로그램 개발자에게 문의해주십시오.");

        console.log(" 오류 내용                                                            ");
        console.log(error);
    }

}, 15000)
