import React, { Component } from 'react';
import './App.css';
import Main from '../components/First/FirstBranch.js'
import {Switch, Route, withRouter} from 'react-router-dom';
import NavBar from '../navigation/index.js';
import AppMain from './AppMain'

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <Switch>
          <Route exact path ='/' render = {() => <Main />}></Route>
          <Route exact path ='/home' render = {() => <AppMain />}></Route>
        </Switch>
        <header className="App-header">

        </header>
      </div>
    );
  }
}

export default App;
