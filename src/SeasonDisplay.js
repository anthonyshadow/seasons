import React from 'react';

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

  const season = getSeason(props.lat, new Date().getMonth())
  const text = season === 'winter' ? 'Burr It is chilly' : 'Lets hit the Beach!'

  console.log(season)


  return (
    <div>
     <h1>{ text }</h1> 
    </div>
  )
};

export default SeasonDisplay;