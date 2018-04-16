import React from 'react';

import './top-nav.css';
import { connect } from 'react-redux';
import {restartGame} from '../actions/index';

function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.dispatch(restartGame())}
          >
            + New Game
          </a>
        </li>
        <li>
          {/* <a
            href="#get-status"
            className="visuallyhidden focusable status-link"
            onClick={() => props.onGenerateAuralUpdate()}
          >
            Hear state of game 
          </a>*/}
        </li>
      </ul>
    </nav>
  );
}

export default connect()(TopNav);