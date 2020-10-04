import React from 'react';
import './design/App.css';
import CityInputForm from './components/CityInputForm.js';
import DayList from './components/DayList';

function App() {
    const [weatherData, setWeatherData] = React.useState([]);
    const fetchPlaceLatLong = async (placeId) => {
        const resp = await fetch(`https://maps.googleapis.com/maps/api/geocode/json?place_id=${placeId}&key=AIzaSyA8Q3_mGxcTWk60zHUfNzM4wowesk2TGSE`);
        const data = await resp.json();
        console.log(data.results[0])
        fetchWeatherData(data); //returns an object. 
    };
    const fetchWeatherData = async (placeData) => {
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${placeData.results[0].geometry.location.lat}&lon=${placeData.results[0].geometry.location.lng}&units=imperial&appid=3e2bd5f93177f236d0f300f96299a06c`);
        const data = await resp.json();
        console.log(data.list);
        setWeatherData(data.list); 
    };
    return (
        <div className="App">
            <header className="App-header">
                <CityInputForm placeIdOut={fetchPlaceLatLong} />
                <DayList weatherData={weatherData} />
            </header>
        </div>
    );
}

export default App;
