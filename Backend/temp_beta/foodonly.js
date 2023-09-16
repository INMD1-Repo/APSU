// const puppeteer = require('puppeteer');
// const path = require("path")
// const downloadPath = path.resolve('./');
// (async () => {
//   const browser = await puppeteer.launch({
//     ignoreDefaultArgs: ['--disable-extensions'],
//   });


//   const page = await browser.newPage();
//   const client = await page.target().createCDPSession();

//   await page.goto("https://opendata.mnd.go.kr/openinf/sheetview2.jsp?infId=OA-9568");
//   await client.send('Page.setDownloadBehavior', {
//     behavior: 'allow',
//     downloadPath: downloadPath,
//   })
  
//   await page.click("#frm > strong > strong > div.fileSave > button:nth-child(4)")
//   await page.waitFor(5000);
//   await browser.close();
// })();


// //정식서비스 하기전에 데이터 가져오는 스크립트 작성하기
// const indata = require("./diet_data/example.json")

// //기본적인 변수 설정
const fs = require("fs");

// //변동성 변수 지정
// let data = [];

// //스크립트 시작parseFloat
// for (let index = 0; index < indata["DATA"].length; index++) {
//   if (data.find(function (data) { return data.dates === indata["DATA"][index].dates }) === undefined) {
//     data.push({
//       dates: indata["DATA"][index].dates, sumcal: indata["DATA"][index].sum_cal, meal: [{
//         info: "조식", menu: [indata["DATA"][index].brst], cal: parseFloat(indata["DATA"][index].brst_cal.replace('kcal', ''),)
//       }, {
//         info: "중식", menu: [indata["DATA"][index].lunc], cal: parseFloat(indata["DATA"][index].lunc_cal.replace('kcal', ''))
//       }, {
//         info: "석식", menu: [indata["DATA"][index].dinr], cal: parseFloat(indata["DATA"][index].dinr_cal.replace('kcal', ''))
//       }]
//     })
//   } else {
//     const indexnum = data.findIndex(function (data) {
//       return data.dates === indata["DATA"][index].dates
//     });
//     if (indata["DATA"][index].brst != '') {
//       data[indexnum].meal[0].cal += parseInt(indata["DATA"][index].brst_cal.replace('kcal', ''))
//       data[indexnum].meal[0].menu.push(indata["DATA"][index].brst);
//     }

//     if (indata["DATA"][index].lunc != '') {
//       data[indexnum].meal[1].cal += parseInt(indata["DATA"][index].lunc_cal.replace('kcal', ''))
//       data[indexnum].meal[1].menu.push(indata["DATA"][index].lunc);
//     }

//     if (indata["DATA"][index].dinr != '') {
//       data[indexnum].meal[2].cal += parseInt(indata["DATA"][index].dinr_cal.replace('kcal', ''))
//       data[indexnum].meal[2].menu.push(indata["DATA"][index].dinr);
//     }

//   }
// }
// for (let index = 0; index < data.length; index++) {
//   let temp = data[index].meal[0].menu
//   let tempmap = new Set(temp);
//   data[index].meal[0].menu = [...tempmap]



//   temp = data[index].meal[1].menu
//   tempmap = new Set(temp);
//   data[index].meal[1].menu = [...tempmap]



//   temp = data[index].meal[2].menu
//   tempmap = new Set(temp);

//   data[index].meal[2].menu = [...tempmap]

// }
// fs.writeFileSync('./diet_data/food_meal.json', JSON.stringify(data));

console.log(JSON.stringify(fs.readFileSync('./diet_data/food_meal.json', "utf8")));