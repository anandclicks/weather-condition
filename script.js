const apiKey = "3b7b32932f198d2f439c3110ee45dd45"
const apiUrl = ` https://api.openweathermap.org/data/2.5/weather?&units=metric&q=`
let tempratur = document.querySelector(".temprature")
let cityName = document.querySelector(".cityName")
let humidity = document.querySelector(".humidity")
let windSpeed = document.querySelector(".windSpeed")
let searchBtn = document.querySelector(".searchBtn")
const searchBox = document.querySelector(".input")
let statusBox = document.querySelector(".statusBox")
let weatherCondition = document.querySelector(".w-condition")
const getData = async (city)=> {
    let response =  await fetch(apiUrl + city + `&appid=${apiKey}`)
    let data = await response.json();
    console.log(data)
    tempratur.innerText = Math.round(data.main.temp) + " °c"
    humidity.innerText = data.main.humidity + " %"
    windSpeed.innerText=data.wind.speed +" kh/h"
    weatherCondition.innerText = data.weather[0].main
    cityName.innerText= data.name
    
}
searchBtn.addEventListener("click", ()=> {
    getData(searchBox.value)
})