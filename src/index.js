import React from 'react';
import ReactDOM from 'react-dom';

import './reset.css';
import './index.css';

import {Provider} from 'react-redux';

import Game from './components/game';

import store from './store';


ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>
  ,
  document.getElementById('root')
);
