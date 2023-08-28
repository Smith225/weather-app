import { Link } from 'react-router-dom';
import Footer from "./Footer.js";


function Home(props) {


    function handleChange(e) {
        props.getName(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            <link rel="stylesheet" src={require('../css/styles.css')} ></link>

            <div className="alignBox">

                <img className="difWeather" src={require("../images/weather.jpg")} alt="Weather" />

                <div className="homeBox">
                    <p className="heading">Weather Info</p>

                    <p className="nameText">Your City</p>

                    <input className="inputField" onChange={handleChange} />

                    <Link className="subButton" to="/info">Submit</Link>

                </div>
            </div>

            <Footer />
        </>
    )
}

export default Home;