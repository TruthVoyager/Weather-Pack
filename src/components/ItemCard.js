import React from 'react';

function ItemCard(props) {
    //check weather against the given item's conditions. If the conditions are met the item will be displaied. 
    if ((props.weatherData.weather[0].main === "Drizzle" || props.weatherData.weather[0].main === "Rain" || props.weatherData.weather[0].main === "Thunderstorm" || props.weatherData.weather[0].main === "Squall") && props.conditionTypes.Rain.Use === "1") {
        return (<h6 className="items" style={{ margin: 5, textAlign: 'left'}}>- {props.Name}</h6>);
    }
    else if (((props.weatherData.main.temp_max < props.conditionTypes.Temp.Max && props.weatherData.main.temp_max > props.conditionTypes.Temp.Min) || (props.weatherData.main.temp_min < props.conditionTypes.Temp.Max && props.weatherData.main.temp_min > props.conditionTypes.Temp.Min)) && props.conditionTypes.Temp.Use === "1") {
        return (<h6 className="items" style={{ margin: 5, textAlign: 'left'}}>- {props.Name}</h6>);
    }
    else if ((props.weatherData.wind.speed < props.conditionTypes.Wind.Max && props.weatherData.wind.speed > props.conditionTypes.Wind.Min) && (props.conditionTypes.Wind.use === "1" && props.conditionTypes.Wind.DontUse === "0")) {
        return (<h6 className="items" style={{ margin: 5, textAlign: 'left'}}>- {props.Name}</h6>);
    }
    else {
        return (<></>);
    }
}

export default ItemCard;