import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

  state = {lat:null, errMsg: null };
  componentDidMount(){
    console.log('My component was rendered')
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        console.log(position)
        this.setState({ lat :position.coords.latitude})
      },
      (err) => {
        this.setState({ errMsg : err.message})
      }
    )
    
  }

  componentDidUpdate(){
    console.log('My component was updated')
  }

  render() {
  
    if(!this.state.errMsg && !this.state.lat){
      return <div>Loading!</div>
     }else if(this.state.errMsg && !this.state.lat){
      return <div>Error : {this.state.errMsg}</div>
     }else{
      return <SeasonDisplay lat={this.state.lat} />
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