import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import Game from './components/game';

import {makeGuess, restartGame} from './actions/index';
import store from './store';

console.log(store.getState())
console.log(store.dispatch(makeGuess(1)))
console.log(store.getState())
console.log(store.dispatch(makeGuess((51-31))))
console.log(store.getState())
console.log(store.dispatch(makeGuess((51-11))))
console.log(store.getState())
console.log(store.dispatch(makeGuess((51))))
console.log(store.getState())
console.log(store.dispatch(restartGame()));
console.log(store.getState())

ReactDOM.render(
  <Game />,
  document.getElementById('root')
);
