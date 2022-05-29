// import the convertTemp.js and getDaylight.js scripts with their default export
import temperatureConverter from './convertTemp.js'
import dayOrNight from './getDayight.js'
const apiKey = "a2f2f2096d10bd70e78e7c97169c9f21"
const goBtn = document.getElementById('goBttn')
var temperature = document.getElementById('tempData')
var humidity = document.getElementById('humidData')
var condition = document.getElementById('conditionsData')


const getWeather = async () => {
    let inputValue = document.getElementById("city").value
    if (inputValue == ""){
        alert("Please provide city name!")
    }
    else {
       const firstCall = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${inputValue}&limit=1&appid=${apiKey}`)
    let data = await firstCall.json()
    return data  
    }
   
}

const finalData = async (data) => {
    if(data){
    let cityLon = (data[0].lon)
    let cityLat = (data[0].lat)
    const finalCall = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${cityLat}&lon=${cityLon}&appid=${apiKey}`)
    let displayData = await finalCall.json()
    return displayData}
}


const HTMLfunction = (data) => {
    if (data) {
    temperature.innerHTML = temperatureConverter(data)
    humidity.innerHTML = data.main.humidity + "%"
    condition.innerHTML = data.weather[0].description
    let isDay = dayOrNight(data)
    if (isDay === "a") {
        document.querySelector('.weatherWrapper').style.backgroundColor = 'blue'
    }
    else {
        document.querySelector('.weatherWrapper').style.backgroundColor = 'black'
    }
}}


goBtn.addEventListener('click', function () {
    getWeather()
        .then(function (data) {
            finalData(data)
                .then(function (data) {
                    HTMLfunction(data)

                })
        }).catch(function (err) {
        console.log(err)

})
    
    })

// declare any variables needed

// create an event listener for the click of the goBttn that calls a function to fetch the weather data

// create a function that calls the function that queries the api
// and then creates promises that will call a function to write the weather data to the HTML page

// use an asynchronous call to fetches the current weather for the specified city, awaits it,
// and returns the resulting data

// create a function that writes the temperature (using local units), humidity, and conditions
// this function should also change the background color of the weather app to blue during the daylight
// hours at the specified city