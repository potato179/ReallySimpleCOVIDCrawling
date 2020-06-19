const request = require('request')
const cheerio = require('cheerio')

let url = 'https://search.naver.com/search.naver?sm=top_hty&fbm=1&ie=utf8&query=%EC%BD%94%EB%A1%9C%EB%82%9819+%ED%99%95%EC%A7%84%EC%9E%90';
request(url, function(error, response, body) {
	const $ = cheerio.load(body);
        let colArr = $(".num")
        console.log(`확진자`, colArr[0].children[0].data)
        console.log(`격리해제`, colArr[1].children[0].data)
        console.log(`검사진행`, colArr[2].children[0].data)
        console.log(`사망자`, colArr[3].children[0].data)
})
