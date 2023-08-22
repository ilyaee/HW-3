const http = require('http')
const prompt = require('prompt-sync')()

const myAPIKey = process.env.myAPIKey

let city = prompt("Введите город: ")

const url = `http://api.weatherstack.com/current?access_key=${myAPIKey}&query=${city}`

http.get(url, (res) => {

})

