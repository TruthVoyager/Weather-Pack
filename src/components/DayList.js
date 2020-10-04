import React from 'react';
import DayCard from './DayCard.js';

function DayList(props) {
    console.log(props);
    return (
        <div>
            <header className="Day-list">
                {props.weatherData.map(dayCard => <DayCard key={dayCard.id} {...dayCard} />)}
            </header>
        </div>
    );
}

export default DayList;