import react , {useState} from "react";
import axios from "axios";
import './App.css';
function App() {
  const[city,setCity]=useState("");
  const [weather,setWeather]=useState("");
  const[loaded,setLoaded]=useState(false)
  function displayTemp(response){
    setLoaded(true)
setWeather(
  {
  humidity:response.data.main.humidity,
  temperature:response.data.main.temp,
description:response.data.main.description,
Wind:response.data.main.wind,

})

  }

  function handleSubmit(event){
    event.preventDefault(event);  
    let apiKey = "baadcc7cb0f909afea4b1c312e4ab46e";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&unit=metrics`
  axios.get(apiUrl).then(displayTemp)
  console.log(apiUrl)
  
  }
  let form= (
  <form onSubmit={handleSubmit}>
    <input type="search" placeholder="Enter a ....." onChange={updateCity}/>
    <button>Search</button>
  </form>
  )
  function updateCity(event){
setCity(event.target.value)
  }
  if (loaded){
    return(
      <div>
   {form}

<ul>
<li>Temperature: {Math.round(weather.temperature)}°C</li>
<li>Description: {weather.description}</li>
<li>Humidity: {weather.humidity}%</li>
<li>Wind: {weather.wind}km/h</li>
</ul>
</div>
    )
 }
 else{
  return (
  <div> 
  <h1>  Weather App</h1>
  {form}
    </div>
  )
 } 
}


export default App;
