import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavBar from './components/NavBar'






// var intervalID = window.setInterval(updateTransition, 7000);


class App extends Component {

  state = {
    formShowing: false
  }

  handleForm = (event) => {
    this.setState({ formShowing: !this.state.formShowing })
  }



  render() {
    return (
      <div className="App">
        <Header/>

        <NavBar handleForm={this.handleForm}
                formShowing={this.state.formShowing}
        />


        
      </div>
    );
  }
}

export default App;
