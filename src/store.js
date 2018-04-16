import {createStore} from 'redux';

import guessReducer from './reducers'



const store = createStore(guessReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default store;