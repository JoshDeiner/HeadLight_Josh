 const getUserSuccess = () => {
  return {
    type: 'GET_USER'
  }
}

export const getUser = () => {
  return (dispatch) => {
    dispatch(getUserSuccess())
  }
}

const destroyCurrentUserSuccess = () => {
    return {
      type: 'GET_CURRENT_USER'
  }
}

export const destroyCurrentUser = () => {
  return (dispatch) => {
  }

fetch(`http://localhost:3001/api/v1/current_users/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    },
      body: JSON.stringify({id: 1})
    })
    .then(resp => alert('Item has been removed'))
  }


export default getUser
