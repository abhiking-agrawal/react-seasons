import React from 'react';
import ReactDOM from 'react-dom';
import Season from './Season'

class App extends React.Component {

  constructor(props){
    super(props);

    //direct assignment just one time
    this.state = {lat:null, errMsg: null };
  }

  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({ lat :position.coords.latitude})
      },
      (err) => {
        this.setState({ errMsg : err.message})
      }
    )

    if(!this.state.errMsg && !this.state.lat){
      return <div>Loading!</div>
     }else if(this.state.errMsg && !this.state.lat){
      return <div>Error : {this.state.errMsg}</div>
     }else{
      return <div>Latitude : {this.state.lat}</div>
     }

    // return (
    //   <div className="ui comments">
    //     <Season />
    //     {this.state.lat}
      
    //   </div>
    // );
  }
}

ReactDOM.render(<App />, document.querySelector('#root'))