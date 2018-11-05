import React from 'react'
import { Link, withRouter,Redirect } from 'react-router-dom'

class Topnav extends React.Component {

  state = {
    currentUserArray : [],
    arrayLength: 0,
    deleteClicked: false
  }


  render () {

  return (

    <div className= 'topnav'>
      <div class="ui menu">

  <a class="item">
    About Us
  </a>
   <a class="item">
    <Link to='/'>Home</Link>
  </a>

  <a class="item">
    <Link to='/student_info'>Student Information</Link>
  </a>

  <a class="item">
    <Link to='/parent_info_one'>Parent Information</Link>
  </a>

  <div class="right menu">
    <a class="item">
      FAQ
    </a>
      <div>
      <a class="item">
        <Link to='/login'>Login</Link>
      </a>
    </div>
        <div>
          <a class="item">
            <Link to='/signup'>Signup for New Account</Link>
          </a>
      </div>

     <div>
        <a class="item">
          <p onClick={this.destroyCurrentUser}>Logout</p>
        </a>
    </div>
  </div>
</div>


    </div>
  )
}

}


export default withRouter(Topnav)
