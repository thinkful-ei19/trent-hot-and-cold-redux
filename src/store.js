import {createStore} from 'redux';

import guessReducer from './reducers'



const store = createStore(guessReducer);

export default store;