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
import Home from './components/Home'
import video from './videos/portfolio.mp4'
import View from './components/View'

class App extends Component {





  render() {
    return (
      <Router>
        <div>
          <video autoPlay muted loop id="myVideo">
            <source src={video} type="video/mp4" />
          </video>
          <div className='dashboard'>
            <Header />
            <div className='sidebar'>

              <NavBar />
              <Footer />
            </div>

          </div>

          <div className="App">

            <Switch>
              <Route exact path='/' component={Home} />
              <Route exact path='/view' component={View} />
              <Route exact path='/about' component={About} />
              <Route exact path='/projects' component={Projects} />
              <Route exact path='/contact' component={Contact} />
            </Switch>
          </div>

        </div>
      </Router>
    );
  }
}

export default App;
