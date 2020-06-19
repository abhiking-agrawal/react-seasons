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
    return (
        <div className="ui card">
         
            <div className="content">
            {season}
            </div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Approve</div>
                    <div className="ui basic red button">Decline</div>
                </div>
            </div>
        </div>
    )
}

export default SeasonDisplay