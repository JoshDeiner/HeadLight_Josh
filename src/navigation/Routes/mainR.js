import React from 'react'
import { Switch } from 'react-router-dom'
import Home from '../components/HomePage/index'
import StudentContainer from '../components/StudentInfo/StudentContainer'


export default class Routes extends React.Component {

  render() {
    return (
      <div className='routes'>
        <Switch>
          <Route exact path ='/' render = {() => <Home />}></Route>
          <Route exact path ='/student_info' render = {() => <StudentContainer />}></Route>
        </Switch>
      </div>
    )
  }
}
