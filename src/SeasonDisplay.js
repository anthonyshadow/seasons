import './SeasonDisplay.css';

import React from 'react';




const seasonConfig = {
  summer: {
    text: "Let's hit the Beach!",
    iconName: 'sun'
  },
  winter: {
    text: "Burr It's chilly",
    iconName: 'snowflake'
  }
}


//function to determine the season based on hemisphere, if true latitude is greater than 0 (Northern hemisphere) Summer is true
//if false it will display winter, the opposite is true for Southern Hemisphere


const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    return lat > 0 ? 'summer' : 'winter'
  } else {
    return lat < 0 ? 'summer' : 'winter'
  }
}

const SeasonDisplay = (props) => {

  const season = getSeason(props.lat, new Date().getMonth());
  const {text, iconName} = seasonConfig[season];


  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{ text }</h1> 
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  )
};

export default SeasonDisplay;