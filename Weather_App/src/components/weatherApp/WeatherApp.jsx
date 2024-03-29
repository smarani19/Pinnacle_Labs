import {useState, React}  from 'react'
import './WeatherApp.css'
import search_icon from '../assests/search.png' ; 
import clear_icon from '../assests/clear.png'
import cloud_icon from '../assests/cloud.png' ;
import drizzle_icon from '../assests/drizzle.png' ;
import rain_icon from '../assests/rain.png' ;
import snow_icon from '../assests/snow.png' ;
import wind_icon from '../assests/wind.png' ;
import humidity_icon from '../assests/humidity.png' ;

function WeatherApp() {

    const api_key = "c24727345f4a63b57a5f2a67d1f0f177" ; 
    const [wcon, setwcon ] = useState(cloud_icon) ; 

 const search = async() => {
    const element= document.getElementsByClassName("cityInput")

    if(element[0].value ===""){
        return 0 ; 
    }
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&units=Metric&appid=${api_key}` ; 
let response = await fetch(url) ; 
let data = await response.json() ; 
const humidity  =document.getElementsByClassName("humidity") ; 
const wind  = document.getElementsByClassName("wind") ; 
const temp = document.getElementsByClassName("weather-temp" ) ; 
const loc = document.getElementsByClassName("weather-location") ; 

humidity[0].innerHTML = data.main.humidity+"%" ; 
wind[0].innerHTML = Math.floor(data.wind.speed) + "  kmph"; 
temp[0].innerHTML = Math.floor(data.main.temp )+" °C" ; 
loc[0].innerHTML = data.name ;

if(data.weather[0].icon==="01d" || data.weather[0].icon==="01n"  ){
    setwcon(clear_icon) ; 
}

else if(data.weather[0].icon==="02d" || data.weather[0].icon==="02n"  ){
    setwcon(cloud_icon) ; 
}

else if(data.weather[0].icon==="03d" || data.weather[0].icon==="03n" || data.weather[0].icon==="04d" || data.weather[0].icon==="04n"  ){
    setwcon(drizzle_icon) ; 
}


else if(data.weather[0].icon==="09d" || data.weather[0].icon==="09n" || data.weather[0].icon==="10d" || data.weather[0].icon==="10n" ){
    setwcon(rain_icon) ; 
}

else if(data.weather[0].icon==="13d" || data.weather[0].icon==="13n"  ){
    setwcon(snow_icon) ; 
}
else{
    setwcon(clear_icon) ; 
}
 }


  return (
    <div className='container'>
    <div className='top-bar'>
      <input type = "text" className= "cityInput" placeholder="Search" />
<div className = "search-icon" onClick ={() => {search()}} >
    <img src={search_icon} alt="" />
</div>

    </div>
     <div className = "weather-image" >
        <img src={wcon} alt="" />
     </div>
     <div className = "weather-temp" >
       24°C
     </div>

     <div className='weather-location'>India</div>
     <div className='data-container'>
     <div className = "element" >
        <img src={humidity_icon} alt="" className="icon"/>
        <div className='data'>
            <div className='humidity'>64%</div>
            <div className='text'>Humidity</div>
        </div>
     </div>

     <div className = "element" >
        <img src={wind_icon} alt="" className="icon"/>
        <div className='data'>
            <div className='wind'>14kmph</div>
            <div className='text'>Wind Speed</div>
        </div>
     </div>

     </div>
    </div>
  )
}

export default WeatherApp
