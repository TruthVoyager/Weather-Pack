import React from 'react';
import DayCard from './DayCard.js';

function DayList(props) {
    //stores the compiled day data as produced by the compileDay function. 
    const [dayData, setDayData] = React.useState([]);
    //stores the previous weather data. 
    const [lastDayData, setLastDayData] = React.useState([]);
    let dayValues = [];
    //creates an array consisting of the most notable data for each day; highest temperature, lowest temperature, highest wind speed, and most severe weather condition
    const compileDay = (dayChunk) => {
        console.log(dayChunk.dt_txt);
                if (dayValues.length === 0 && dayValues.length < 6) {
            dayValues.push(dayChunk);
            //console.log(dayValues);
        }
        else if (parseInt(dayValues[dayValues.length - 1].dt_txt.substring(9, 11)) < parseInt(dayChunk.dt_txt.substring(9, 11)) && dayValues.length < 6) {
            dayValues.push(dayChunk);
        }
        else {
            console.log(parseInt(dayValues[dayValues.length - 1].dt_txt.substring(9, 11)));
            if (dayValues[dayValues.length - 1].main.temp_max < dayChunk.main.temp_max) {
                dayValues[dayValues.length - 1].main.temp_max = dayChunk.main.temp_max;
            }
            if (dayValues[dayValues.length - 1].main.temp_min > dayChunk.main.temp_min) {
                dayValues[dayValues.length - 1].main.temp_min = dayChunk.main.temp_min;
            }
            if (dayValues[dayValues.length - 1].wind.speed < dayChunk.wind.speed) {
                dayValues[dayValues.length - 1].wind.speed = dayChunk.wind.speed;
            }
            if (dayChunk.weather[0].main === "Rain" && (dayValues[dayValues.length - 1].weather[0].main != "Snow" || dayValues[dayValues.length - 1].weather[0].main != "Thunderstorm" || dayValues[dayValues.length - 1].weather[0].main != "Squall" || dayValues[dayValues.length - 1].weather[0].main != "Tornado")) {
                dayValues[dayValues.length - 1].weather[0].main = "Rain";
            }
            else if (dayChunk.weather[0].main === "Snow" && (dayValues[dayValues.length - 1].weather[0].main != "Thunderstorm" || dayValues[dayValues.length - 1].weather[0].main != "Squall" || dayValues[dayValues.length - 1].weather[0].main != "Tornado")) {
                dayValues[dayValues.length - 1].weather[0].main = "Snow";
            }
            else if (dayChunk.weather[0].main === "Thunderstorm" && (dayValues[dayValues.length - 1].weather[0].main != "Squall" || dayValues[dayValues.length - 1].weather[0].main != "Tornado")) {
                dayValues[dayValues.length - 1].weather[0].main = "Thunderstorm";
            }
            else if (dayChunk.weather[0].main === "Squall" && dayValues[dayValues.length - 1].weather[0].main != "Tornado") {
                dayValues[dayValues.length - 1].weather[0].main = "Squall";
            }
            else if (dayChunk.weather[0].main === "Tornado") {
                dayValues[dayValues.length - 1].weather[0].main = "Tornado";
            }
        }
    }
    //sets the dayData equal to an empty array when a new location's weather information has been recieved. 
    if ((props.weatherData != lastDayData) && props.weatherData.length > 0) {
        setDayData([]);
    }
    //sets the dayData equalt to a compiled version of the new weather information. 
    if (dayData.length === 0 && props.weatherData.length > 0) {
        setLastDayData(props.weatherData)
        props.weatherData.map(compileDay);
        setDayData(dayValues);
    }
    return (
        <div>
            <header className="Day-list">
                {dayData.map((dayCard, Index)=> <DayCard key={Index} {...dayCard} />)}
            </header>
        </div>
    );
}

export default DayList;