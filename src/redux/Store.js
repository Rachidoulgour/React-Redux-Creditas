import { createStore, compose, applyMiddleware } from 'redux';
import rootReducer from './reducers';

import promiseMiddleware from 'redux-promise';
import ReduxThunk from 'redux-thunk';


export const saveState = (state) => {
  try {
    let serializedData = JSON.stringify(state)
    localStorage.setItem('state', serializedData)
  } catch (error) {
	console.log(error)    
  }
}
export const loadState = () => {
  try {
    const serializedData = localStorage.getItem('state')
    if (serializedData === null){
      return undefined 
    }
    return JSON.parse(serializedData)
  } catch (error) {
    return undefined 
  }
}
const persistedState=loadState();
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const createStoreWithMiddleware = applyMiddleware(promiseMiddleware, ReduxThunk)(
  createStore
);
const store = createStoreWithMiddleware(rootReducer, persistedState ,composeEnhancers())

store.subscribe( function () {
  saveState(store.getState())
})
export default store;