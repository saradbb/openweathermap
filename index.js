const express = require('express');
const https   = require('https');
const bodyParser = require('body-parser')
const app = express()
app.use(bodyParser.urlencoded({extended:true}))
//const url = "https://api.openweathermap.org/data/2.5/weather?q=Paris&appid=be40bef2471781380f2771d0d44b13e4"

const API_KEY = "205c4482b265843af48b9c5feebbf058"     // ;p If you want valuable API key: Bad luck
app.get('/', (req,res) =>{
  //Send the form
res.sendFile(__dirname + '/index.html')
})



/*
https.get(url, (response) => {
response.on('data', (data) =>{

  const weatherDescription = weatherData.weather[0].description
  const icon = weatherData.weather[0].icon
  const imgUrl = "http://openweathermap.org/img/wn/10n@2x.png"

res.write('<head><meta charset="utf-8"></head>');
  res.write("<h1>The temperature in Paris is "+ temp + " degree celcius.</h1>");
  res.write("<h1> The weather is "+weatherDescription+"</h1>");
  res.write("<img src = " + imgUrl +">");
  res.send()
})
})
*/
app.post('/',(req,res) => {
  //Post request after the form is submitted
cityName = req.body.city   //Parse the city name from the form
const url = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&units=metric&appid=" + API_KEY   //URL to make an API call 
https.get(url,(response) =>       //Get request
response.on("data", (data) =>{                      //on the response
  const weatherData = JSON.parse(data)              //Convert JSON string to JSON Object
  const temp = weatherData.main.temp
  const weatherDescription = weatherData.weather[0].description
  const icon = weatherData.weather[0].icon
  const imgUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"    //To get the image icon representing current weather
  res.write('<head><meta charset="utf-8"></head>');                        //to ensure image is displayed
    res.write("<h1>The temperature in" + cityName + " is "+ temp + " degree celcius.</h1>");
    res.write("<h1> The weather is "+weatherDescription+"</h1>");
    res.write("<img src = " + imgUrl +">");
    res.send()

}

)
)

})



app.listen(3000, () => {
  console.log("Runnjing here")
})
