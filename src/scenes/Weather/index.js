import React, { useEffect, useState } from "react";
import Weather from './Weather';
import { toast } from 'react-toastify'; // lib chamada alert
import 'react-toastify/dist/ReactToastify.css';


function WeatherContainer() {
//1 hooks

  const [lat, setLat] = useState(0);
  const [long, setLong] = useState(0);
  const [weatherInfo, setWeatherInfo] = useState({});
  const [city, setCity] = useState("");
  const [loading, setLoading] = useState(true);



//2 componentes
  const getCurrentPosition=() =>{//Permitir localização 
    navigator.geolocation.getCurrentPosition(function(position) {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
      setCity(position.coords.city);
    });
  }

//Componente inicial, lat e long
  const getWeatherData = async () =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&lang=pt&appid=9ab34c97e7eca54fe8d8bb9205a712ae`);
    const weatherData = await response.json();
    const {name, main:{temp}, wind:{speed}, sys:{sunrise, sunset}, weather:[{icon}]} = weatherData;
    setWeatherInfo({
      name,
      temp,
      speed,
      sunset,
      sunrise,
      icon,
    })
    setLoading(false);
  }


//Componente requisição das cidade no input
  const getWeatherCity = async () =>{
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&lang=pt&appid=9ab34c97e7eca54fe8d8bb9205a712ae`);
    const weatherCity = await response.json();
    toast.configure()

    // componentes alerta
    if (weatherCity.cod == 404 || weatherCity.cod == 400){ // || -> ou
      weatherCity.cod == 404 ? toast.warn('Nome da cidade incorreto 😢', {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      }) : toast.info('✎ Informe uma cidade.', {// operador ternario : , não necessita do IF. Se for 404 : se não..
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
      return
    }
    console.log(weatherCity);
    const {name, main:{temp}, wind:{speed}, sys:{sunrise, sunset}, weather:[{icon}] } = weatherCity;
    setWeatherInfo({
      name,
      temp,
      speed,
      sunset,
      sunrise,
      icon,
    })
  }

  //3 useEffect
  useEffect(() => {
    getCurrentPosition();
  }, []);

  useEffect(()=> {
    if (lat  && long){//se lat long existe vou fazer algo
      getWeatherData();
    }
  },[lat,long]);//escuta states lat e long e chama if(linha23) para imprimir o lat long.


  //4 props
  return <Weather 
  weatherInfo={weatherInfo} 
  setCity={setCity} 
  city={city} 
  getWeatherCity={getWeatherCity}
  loading={loading}
  />;
}
export default WeatherContainer;