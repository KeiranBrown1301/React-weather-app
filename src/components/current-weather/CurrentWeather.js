import React from "react"
import "./current-weather.css"

function CurrentWeather() {
   return (
     <div className="weather">
      <div className="top">
        <p className="city">Melbourne</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img alt="weather" className="weather-icon" src="" />
     </div>
   )
 }

 export default CurrentWeather
