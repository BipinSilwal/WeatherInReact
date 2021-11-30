import React from 'react'
import './CSS/weather.css';

const Weather = ({name,  main, wind, weather}) => {

    const {temp, humidity} = main;
    const {description} = weather[0];
    

    return (
        <>
      <div className="main">





<div className="container">

    <h1>{`Weather in ${name}`}</h1>
    <h2>{temp}</h2>

    <p>{description}</p>
    <h3>{`Humidity:${humidity}`}</h3>
    <h4>{`Wind:${wind.speed}`}</h4>

</div>

</div>


        </>
    )
}

export default Weather
