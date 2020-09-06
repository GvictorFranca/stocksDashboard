const Koa = require('koa')
const Router = require('koa-router')
const https = require('https')


const router = new Router()
const app = new Koa()

const apiKey = 'NCNSF5HXKVKIPWBH'
const url = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=VVAR3.SA&outputsize=full&apikey=${apiKey}`




https.get(url, (response) => {
    let data = ''
    response.on('data', (retrive) => {
        data += retrive
    })
    response.on('end', () => {
        let obj = JSON.parse(data)
        
        const result = obj['Time Series (Daily)']['2020-09-04']['4. close']
        return result
    })
    .on('error', ()=> console.log(error))
})












// const result = function getHighPrice(data){
//     const obj = JSON.parse(data)
//     return obj
// }

//  console.log(result)  

app.listen((3000), ()=> console.log("server is Runing"))