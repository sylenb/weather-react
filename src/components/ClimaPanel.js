import React, { useState } from 'react';
import Form from './Form';
import Clima from './Clima';

const ClimaPanel = () => {

    let urlWeather = " https://api.openweathermap.org/data/2.5/weather?APPID=d7cda9528a1b498b4642923367d42b31&lang=es";
    let city = "&q=";

    let urlForecast = " https://api.openweathermap.org/data/2.5/forecast?APPID=d7cda9528a1b498b4642923367d42b31&lang=es";

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);
    const [location, setLocation] = useState("");

    const getLocation = async (loc) => {
        setLoading(true);
        setLocation(loc);

        //weather

        urlWeather = urlWeather + city + loc;

        await fetch(urlWeather).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });

        //Forecast

        urlForecast = urlForecast + city + loc;

        await fetch(urlForecast).then((response) => {
            if (!response.ok) throw { response }
            return response.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);

            setLoading(false);
            setShow(true);

        }).catch(error => {
            console.log(error);
            setLoading(false);
            setShow(false);
        });


    }


    return (

        <React.Fragment>

            <Form
                newLocation={getLocation}
            />

            <Clima
                showData={show}
                loadingData={loading}
                weather={weather}
                forecast={forecast}
            />


        </React.Fragment>

    );

}

export default ClimaPanel;
