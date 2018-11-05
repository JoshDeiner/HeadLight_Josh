

import { combineReducers } from 'redux'
import { authentication } from './userAuth'


const rootReducer = combineReducers({
  authentication,

})

export default rootReducer
