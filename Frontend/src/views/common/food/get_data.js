const sample = require("../../../assets/example.json")

let json = []
let test = "2023-01-18(수)"
for (let index = 0; index < sample.length; index++) {
    const time = sample[index].dates.replace(/([가-힣()])+/g,'')
    const array = {
        name: "ㅤㅤㅤㅤㅤㅤ",
        start: time + "T00:00:00",
        end: time + "23:59:59",
        sumcal: sample[index].sumcal,
        data: sample[index].meal,
        "timed":true
    }
    console.log(array);    
}
