import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Sidebar from './components/sidebar';
import Home from './components/home'
import About from './components/about'
import Counter from './components/counter'
import Skills from './components/skills'
import Education from './components/education'
import Service from './components/service'
import Work from './components/work'
import Contact from './components/contact'



class App extends Component {
  render() {
    return (
      <div id="colorlib-page">
        <div class="container-wrap">
          <Sidebar></Sidebar>
          <div id="colorlib-main">
            <Home></Home>
            <About></About>
            <Service></Service>
            <Counter></Counter>
            <Skills></Skills>
            <Education></Education>
            <Work></Work>
            <Contact></Contact>
          </div>
        </div>


      </div>
    );
  }

}

export default App;
