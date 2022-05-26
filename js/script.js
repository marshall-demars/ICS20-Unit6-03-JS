// Copyright (c) 2022 Marshall All rights reserved
//
// Created by: Marshall
// Created on: Apr 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS20-Unit6-03-JS/sw.js", {
    scope: "/ICS20-Unit6-03-JS/",
  })
}

/**
 * Get API info.
*/
// code from: https://www.youtube.com/watch?v=670f71LTWpM
const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData.main.temp)
    const temperature = jsonData.main.temp - 273.15
    const symbol = jsonData.weather[0].icon
    const description = jsonData.weather[0].description
    document.getElementById("weather").innerHTML = "The current weather is " + temperature.toFixed(0) + "°C" + "<img src='https://openweathermap.org/img/wn/" + symbol + "@2x.png' alt='Weather Icon' width='15%'>" + "with " + description
  } catch (err) {
    console.log(err)
    document.getElementById("weather").innerHTML = "Error fetching current weather."
  }
}

    getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
