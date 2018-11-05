import React, { Component } from 'react';
import './App.css';
import Main from '../components/First/FirstBranch.js'
import {Switch, Route, withRouter} from 'react-router-dom';
import NavBar from '../navigation/index.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path ='/' render = {() => <Main />}></Route>
        </Switch>
        <header className="App-header">
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
