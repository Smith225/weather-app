import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Footer from "./Footer.js";

function Info(props) {

    const { town } = props;

    const [details, setDetails] = useState({
        desc: "",
        temp: "",
        hum: "",
        pressure: "",
        lat: "",
        lon: "",
        iconVal: ""
    });

    const navigate = useNavigate();

    async function getWeather() {

        const apiKey = process.env.REACT_APP_API_KEY;
        console.log(apiKey);
        const url = "http://api.openweathermap.org/geo/1.0/direct?q=" + town + "&appid=" + apiKey;

        const response = await fetch(url, {
            method: "GET"
        });

        const weather = await response.json();

        if (weather.length === 0) {
            navigate("/");
            alert("Please enter valid city");
        }

        console.log(weather[0].lat, weather[0].lon);


        const url2 = "https://api.openweathermap.org/data/2.5/weather?lat=" + weather[0].lat + "&lon=" + weather[0].lon + "&units=metric&appid=" + apiKey;

        const response2 = await fetch(url2, {
            method: "GET"
        });

        const weatherData = await response2.json();

        console.log(weatherData);

        //  Icon Section for which Image to render 
        const icon = weatherData.weather[0].icon.substring(0, 2);


        setDetails({
            desc: upperCase(weatherData.weather[0].description),
            temp: weatherData.main.temp,
            hum: weatherData.main.humidity,
            pressure: weatherData.main.pressure,
            lat: weatherData.coord.lat,
            lon: weatherData.coord.lon,
            iconVal: icon
        });

    }

    function upperCase(str) {
        return str.slice(0, 1).toUpperCase() + str.substring(1, str.length);
    }


    useEffect(() => {
        getWeather();
        // eslint-disable-next-line
    }, []);


    return (

        <>

            <link rel="stylesheet" src={require("../css/infoStyles.css")}></link>


            {details.desc !== "" &&

                <div>
                    <div className="infoBox" >

                        <p className="property">Weather Description</p>
                        <p className="value">{details.desc}</p>

                        <p className="property">Temperature </p>
                        <p className="value">{details.temp} °C</p>

                        <p className="property">Humidity</p>
                        <p className="value">{details.hum} %</p>

                        <p className="property">Pressure</p>
                        <p className="value">{details.pressure} hPa</p>

                        <p className="property">Latitude & Longitude</p>
                        <p className="value">{details.lat} and {details.lon}</p>

                    </div>


                    <div>

                        {details.iconVal === "01" && <img className="weatherImg" src={require("../gifs/clear.gif")} alt="Weather"></img>}
                        {(details.iconVal === "02" || details.iconVal === "03" || details.iconVal === "04") && <img className="weatherImg" src={require("../gifs/clouds.gif")} alt="Weather"></img>}
                        {(details.iconVal === "09" || details.iconVal === "10") && <img className="weatherImg" src={require("../gifs/rain.gif")} alt="Weather"></img>}
                        {details.iconVal === "11" && <img className="weatherImg" src={require("../gifs/thunder.gif")} alt="Weather"></img>}
                        {details.iconVal === "13" && <img className="weatherImg" src={require("../gifs/snow.gif")} alt="Weather"></img>}
                        {details.iconVal === "50" && <img className="weatherImg" src={require("../gifs/mist.gif")} alt="Weather"></img>}

                    </div>
                    <Footer />
                </div>
            }

        </>
    )
}

export default Info