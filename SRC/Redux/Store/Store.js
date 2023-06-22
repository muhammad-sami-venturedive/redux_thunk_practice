import { createStore } from 'redux'
import RootReducer from '../Reducers/RootReducer/RootReducer'
import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

export default Store = createStore(RootReducer, applyMiddleware(thunk))