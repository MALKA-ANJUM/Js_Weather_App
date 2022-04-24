console.log("Hello World");

let searchBar = document.getElementById("searchbar")
let btn = document.getElementById("submit")

let city = document.getElementById("cityname") // data => main => name
let temp = document.getElementById("temp") // data => main => temp
let desc = document.getElementById("desc")
let humidity = document.getElementById("humidity")
let wind = document.getElementById("wind")



let apiKey = "999bb359ad83ef3549cbbef7f3cdf2e1"

btn.addEventListener("click", () => {
    let cityName = searchBar.value
    let api = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + apiKey
    //console.log(cityName)
    

    fetch(api)
    .then(res => res.json())
    
    .then(data => {
        console.log(data)
        let cityValue = data.name
        city.innerHTML = '<i class="fa-solid fa-location-dot"></i> '  + cityValue

        let temperature = data.main.temp
        temperature = Math.round( temperature - 273.15)
        temp.innerHTML = temperature + '&#176;' + '<i class="fa-solid fa-c"></i>'
        

        let description = data.weather[0].description
         desc.innerHTML =  description

        let humid = data.main.humidity
        humidity.innerHTML = "Humidity: " + humid + "%"

        let windSpeed = data.wind.speed
        wind.innerHTML = "Wind: " + windSpeed + "km/h"
    })

  
})

