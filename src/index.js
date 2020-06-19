import React from 'react';
import ReactDOM from 'react-dom';
import Season from './Season'

class App extends React.Component {

  constructor(props){
    super(props);

    this.state = {lat:null, long: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({ lat :position.coords.accuracy})
      },
      (err) => console.log(err)
    )

    return (
      <div className="ui comments">
        <Season />
        {this.state.lat}
      </div>
    );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))