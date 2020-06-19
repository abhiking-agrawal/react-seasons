import React from 'react';
import ReactDOM from 'react-dom';
import Season from './Season'


const getLocation = () => {
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position)
      return position.coords.accuracy;
    },
    (err)=> console.log(err)
  )
}
class App extends React.Component {
render(){  
return (
    <div className="ui comments">
     <Season />
     {getLocation()}
    </div>
  );
}
}

ReactDOM.render(<App />, document.querySelector('#root'))