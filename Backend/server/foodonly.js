        //정식서비스 하기전에 데이터 가져오는 스크립트 작성하기
        const indata = require("./diet_data/example.json")

        //기본적인 변수 설정
        const fs = require("fs");

        //변동성 변수 지정
        let data = [];
        
        //스크립트 시작parseFloat
        for (let index = 0; index < indata["DATA"].length; index++) {
                if (data.find(function(data) { return data.dates === indata["DATA"][index].dates }) === undefined) {
                  data.push({
                    dates: indata["DATA"][index].dates, sumcal: indata["DATA"][index].sum_cal, meal: [{
                      info: "조식", menu: [indata["DATA"][index].brst], cal:parseFloat(indata["DATA"][index].brst_cal.replace('kcal', ''),)
                    }, {
                      info: "중식", menu: [indata["DATA"][index].lunc],cal: parseFloat(indata["DATA"][index].lunc_cal.replace('kcal', ''))
                    }, { 
                      info: "석식", menu: [indata["DATA"][index].dinr], cal: parseFloat(indata["DATA"][index].dinr_cal.replace('kcal', '')) 
                    }]
                  })
                } else {
                  const indexnum = data.findIndex(function(data) {
                    return data.dates === indata["DATA"][index].dates
                  });
                  if (indata["DATA"][index].brst != '') {
                    data[indexnum].meal[0].cal += parseInt(indata["DATA"][index].brst_cal.replace('kcal', ''))
                    data[indexnum].meal[0].menu.push(indata["DATA"][index].brst);
                  }
              
                  if (indata["DATA"][index].lunc != '') {
                    data[indexnum].meal[1].cal += parseInt(indata["DATA"][index].lunc_cal.replace('kcal', ''))
                    data[indexnum].meal[1].menu.push(indata["DATA"][index].lunc);
                  }
              
                  if (indata["DATA"][index].dinr != '') {
                    data[indexnum].meal[2].cal += parseInt(indata["DATA"][index].dinr_cal.replace('kcal', ''))
                    data[indexnum].meal[2].menu.push(indata["DATA"][index].dinr);
                  }
              
                }
              }
        
        let newdata = require('./diet_data/food_meal.json'); 
        fs.writeFileSync('./diet_data/food_meal.json', JSON.stringify(data));
