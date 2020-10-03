import React from 'react';
import 'design/App.css';
import CityInputForm from './components/CityInputForm.js';

function App() {
    //const [weatherData, setWeatherData] = useState([]);
    const fetchPlaceLatLong = async (placeId) => {
        const resp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyA8Q3_mGxcTWk60zHUfNzM4wowesk2TGSE`);
        const data = await resp.json();
        fetchWeatherData(data); //returns an object. 
    };
    const fetchWeatherData = async (placeData) => {
        const resp = await fetch(`api.openweathermap.org/data/2.5/forecast?lat=${placeData.results.geometry.location.lat}&lon=${placeData.results.geometry.location.lng}&appid=3e2bd5f93177f236d0f300f96299a06c`);
        const data = await resp.json();
        console.log(data);
        //setWeatherData([data]); 
    };
    return (
        <div className="App">
            <header className="App-header">
                <CityInputForm placeIdOut={fetchPlaceLatLong} />
            </header>
        </div>
    );
}

export default App;
