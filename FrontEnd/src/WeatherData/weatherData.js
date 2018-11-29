import React from 'react';
import { Container, Row, Col } from 'reactstrap';





const weatherData = (props) => {
    console.log(props)
    return (
        <div id='weather'>
            <h3>Denver Weather</h3>
                <p>Temp: {props.weather && props.weather.main && props.weather.main.temp}</p>
                <p>Humidity: {props.weather && props.weather.main && props.weather.main.humidity}</p>
                <p>High: {props.weather && props.weather.main && props.weather.main.temp_max}</p>
                <p>Low: {props.weather && props.weather.main && props.weather.main.temp_min}</p>
        </div>
    )
}

export default weatherData;

