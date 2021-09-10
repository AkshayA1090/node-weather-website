const request = require('request')

const forecast=(latitude,longitude,callback)=>{
    const url2 ='http://api.weatherstack.com/current?access_key=2591a5e1749abf4403982872d8a72e52&query='+latitude+','+longitude+'&units=f'
    request({url: url2,json: true},(error,{body})=>{
       if(error){
          callback('Unable to connect to location',undefined)
       } else if (body.error) {
          callback('Unable to find location. Try a new search!',undefined)
       } else {
          callback(undefined,body.current.weather_descriptions[0]+" It is currently "+body.current.temperature+" degrees out. The humidity is "+body.current.humidity)
       }
    })
 }

 module.exports=forecast