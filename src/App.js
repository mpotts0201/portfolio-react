import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import styled from 'styled-components'
import Header from './components/Header'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'
import NavBar from './components/NavBar'
import { BrowserRouter as Router, Switch, Link, Route } from 'react-router-dom'
import About from './components/About'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Contact from './components/Contact'


class App extends Component {





  render() {
    return (
      <Router>
        <div className="App">

          <Header />
          <br />
          <br />
          <br />
          <NavBar />
          <br />
          <br />
          <Switch>
            <Route exact path='/about' component={About} />
            <Route exact path='/projects' component={Projects} />
            <Route exact path='/contact' component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
