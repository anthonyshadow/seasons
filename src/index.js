import React from 'react';
import ReactDOM from 'react-dom'

import SeasonDisplay from './SeasonDisplay'

class App extends React.Component {

  constructor(props) {
    super(props);

    this.state = {lat: null, errorMessage: '' };

    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        //sets latitude in state
        this.setState({lat: position.coords.latitude})
      },
      (err) => {
        //sets error message
        // console.log("error", err)
        this.setState({errorMessage: err.message})
      }
    );
  }
  
  render() {
      
      if (this.state.errorMessage && !this.state.lat) {
        return (
          <div>
            Error: {this.state.errorMessage}
          </div>
        )
      };

      if (this.state.lat && !this.state.errorMessage) {
        return (
          <div>
            Latitude : {this.state.lat}
          </div>
        )
      };

      return (
        <div>
          Please wait your webpage is being loaded
        </div>
      )

  };
};


ReactDOM.render(<App/>, document.querySelector('#root'));