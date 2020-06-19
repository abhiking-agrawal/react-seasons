import React from 'react';
import ReactDOM from 'react-dom';
import Season from './Season'

const App = () => {
  let test = 0;
  window.navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log(position)
      test = position.accuracy;
    },
    (err)=> console.log(err)
  )
  return (
    <div className="ui comments">
     <Season />
     {test}
    </div>
  );
}

ReactDOM.render(<App />, document.querySelector('#root'))