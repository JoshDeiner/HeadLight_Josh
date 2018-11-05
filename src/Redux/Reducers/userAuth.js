import React from 'react'
// componentDidMount = ()

const initialState = {
  user: null
}



export function authentication(state=initialState, action) {
  switch(action.type) {


    case 'GET_USER':
      return {user: action.user}
    case 'DESTROY_CURRENT_USER':
    return action.destroyCurrentUser
    default:
      return state
  }
}
