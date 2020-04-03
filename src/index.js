import React from 'react';
import ReactDOM from 'react-dom';

import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';

class App extends React.Component {

  //sets state

  state = {lat: null, errorMessage: '' };

  //determine state values

  componentDidMount() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => this.setState({lat: position.coords.latitude}),
      (err) => this.setState({errorMessage: err.message})
    );
  }


  //helper function

  renderContent() {

    if (this.state.errorMessage && !this.state.lat) {
      return (
        <div>
          Error: {this.state.errorMessage}
        </div>
      )
    };

    if (this.state.lat && !this.state.errorMessage) {
      return (
        <SeasonDisplay lat={this.state.lat} />
      )
    };

    return (
      <Spinner message="Please accept location Request"/>
    )

  }

//page rendering
  
  render() {
      
    return (
      <div>
        {this.renderContent()}
      </div>
    )

  };
};

//default props

Spinner.defaultProps = {
  message: 'Loading...'
};


ReactDOM.render(<App/>, document.querySelector('#root'));