import React from 'react';

function DayCard(props) {
    console.log(props);
    if (props.dt_txt.includes("12:00:00")) {
        const icons = {
            iconNames: ["fas fa-cloud", "fas fa-cloud-sun-rain", "fas fa-cloud-sun", "fas fa-cloud-showers-heavy", "fas fa-sun", "far fa-snowflake", "fas fa-bolt", "fas fa-smog"]
        };
        let chosenIcon = "";
        const chooseIcon = () => {
            if (props.weather[0].main == "Clear") { chosenIcon = icons.iconNames[4] }
            else if (props.weather[0].main == "few clouds") { chosenIcon = icons.iconNames[2] }
            else if (props.weather[0].main == "Clouds") { chosenIcon = icons.iconNames[0] }
            else if (props.weather[0].main == "Drizzle") { chosenIcon = icons.iconNames[3] }
            else if (props.weather[0].main == "Rain") { chosenIcon = icons.iconNames[1] }
            else if (props.weather[0].main == "Thunderstorm" || props.weather[0].main == "Squall" || props.weather[0].main == "Tornado") { chosenIcon = icons.iconNames[6] }
            else if (props.weather[0].main == "Snow") { chosenIcon = icons.iconNames[5] }
            else if (props.weather[0].main == "Mist" || props.weather[0].main == "Smoke" || props.weather[0].main == "Haze" || props.weather[0].main == "Dust" || props.weather[0].main == "Sand" || props.weather[0].main == "Ash" ) { chosenIcon = icons.iconNames[7] }
        };
        let dayNumber = new Date(Date.parse(props.dt_txt.replace(/\s/g, "T")));
        let dayName = dayNumber.toLocaleDateString('en-us', { weekday: 'long' });
        chooseIcon();
        console.log(chosenIcon);
        return (
            <div className="day-card" style={{ display: 'inline-block', padding: 40 }}>
                <h4>{dayName}</h4>
                <i className={'' + chosenIcon}></i>
                <h4>{props.main.temp_max}</h4>
                <h5>{props.main.temp_min}</h5>
            </div>
        );
    }
    else {
        return (<></>);
    }
}

export default DayCard;