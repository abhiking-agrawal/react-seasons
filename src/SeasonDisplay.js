import React from 'react';

const getSeason = (lat, month)=>{

    if(month > 2 && month <9){
        return lat > 0 ? 'summer' : 'winter';
    }else{
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = (props) => {
    // console.log(props)

    const season = getSeason(props.lat,new Date().getMonth())
    const seasonText = season === 'summer' ? "Let's hit the beach" : "Burr, It's chilly"
    const icon = season === 'summer' ? "sun" : "snowflake"
    return (
        <div>
            <i  className={`${icon} icon`}></i>
            <h1> {seasonText}</h1>
            <i  className={`${icon} icon`}></i>

        </div>
    )
}

export default SeasonDisplay