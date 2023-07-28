import { Link } from 'react-router-dom';


function Home(props) {


    function handleChange(e) {
        props.getName(e.target.value);
        console.log(e.target.value);
    }

    return (
        <>
            <link rel="stylesheet" src={require('../css/styles.css')} ></link>

            <div>

                <img className="difWeather" src={require("../images/weather.jpg")} alt="Weather" /> 

                <div className="homeBox">
                    <p className="heading">Weather Info</p>

                    <p style={{ fontWeight: "500" }}>Your City : 
                    
                    <input className="inputField" onChange={handleChange} />
                    
                    </p>

                    <Link className="subButton" to="/info">Submit</Link>
                </div>

            </div>
        </>
    )
}

export default Home;