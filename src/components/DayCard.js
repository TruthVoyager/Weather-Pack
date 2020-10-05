import React from 'react';
import ItemCard from './ItemCard.js';

function DayCard(props) {
    //stores the data from the itemObjects json file. 
    let itemsArray = require('../assets/ItemObjects');
    //stores the refrence strings for icons used with the FontAwesome free service. 
    const icons = {
        iconNames: ["fas fa-cloud fa-2x", "fas fa-cloud-sun-rain fa-2x", "fas fa-cloud-sun fa-2x", "fas fa-cloud-showers-heavy fa-2x", "fas fa-sun fa-2x", "far fa-snowflake fa-2x", "fas fa-bolt fa-2x", "fas fa-smog fa-2x"]
    };
    //stores the refrence sting for the appropriate icon in this context. 
    let chosenIcon = "";
    //looks over weather conditions to determin the appropriate icon to use. 
    const chooseIcon = () => {
        if (props.weather[0].main === "Clear") { chosenIcon = icons.iconNames[4] }
        else if (props.weather[0].main === "few clouds") { chosenIcon = icons.iconNames[2] }
        else if (props.weather[0].main === "Clouds") { chosenIcon = icons.iconNames[0] }
        else if (props.weather[0].main === "Drizzle") { chosenIcon = icons.iconNames[1] }
        else if (props.weather[0].main === "Rain") { chosenIcon = icons.iconNames[3] }
        else if (props.weather[0].main === "Thunderstorm" || props.weather[0].main === "Squall" || props.weather[0].main === "Tornado") { chosenIcon = icons.iconNames[6] }
        else if (props.weather[0].main === "Snow") { chosenIcon = icons.iconNames[5] }
        else if (props.weather[0].main === "Mist" || props.weather[0].main === "Smoke" || props.weather[0].main === "Haze" || props.weather[0].main === "Dust" || props.weather[0].main === "Sand" || props.weather[0].main === "Ash" ) { chosenIcon = icons.iconNames[7] }
    };
    //the following lets work together to get the name of the day of the week
    let dayNumber = new Date(Date.parse(props.dt_txt.replace(/\s/g, "T")));
    let dayName = dayNumber.toLocaleDateString('en-us', { weekday: 'long' });
    chooseIcon();
    return (
        <div className="day-card" style={{ display: 'inline-block', verticalAlign:'top', padding: 30}}>
            <h4 style={{margin: 5 }}>{dayName}</h4>
            <i className={chosenIcon}></i>
            <h4 className="tempHigh" style={{ margin: 5 }}>{Math.round(parseFloat(props.main.temp_max))}&deg;F</h4>
            <h5 className="tempLow" style={{ margin: 5 }}>{Math.round(parseFloat(props.main.temp_min))}&deg;F</h5>
            <h5 style={{ margin: 15 }}>Suggested Items:</h5>
            <div>
                {itemsArray.map(itemCard => <ItemCard key={itemCard} weatherData={props} {...itemCard} />)}
            </div>
        </div>
    );
}

export default DayCard;