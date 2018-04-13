import {GUESS, RESTART_GAME} from '../actions/index.js';

const initialState = {
    guesses: [],
    feedback: 'Make your guess!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
}; 

const generateFeedback = (guess, correctAnswer) => {
    const difference = Math.abs(guess - correctAnswer);
    
    if (difference >= 50) {
        return 'You\'re Ice Cold...';
      } else if (difference >= 30) {
        return 'You\'re Cold...';
      } else if (difference >= 10) {
        return 'You\'re Warm.';
      } else if (difference >= 1) {
        return 'You\'re Hot!';
      } else {
        return 'You got it!';
      }
}

const generateAuralStatus = (guesses, feedback) => {
    const pluralize = guesses.length !== 1;

    let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    if (guesses.length > 0) {
      auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.slice().reverse().join(', ')}`;
    }
    return auralStatus;
}

const guessReducer = (state=initialState, action) => {
  if (action.type === GUESS) {
    let guess = parseInt(action.guess, 10);
    let feedback;
    const guesses = [...state.guesses, action.guess];

    if (isNaN(guess)) {
        feedback = 'Please enter a valid number';
        return {
            ...state,
            feedback
        }
      }
    feedback = generateFeedback(guess, state.correctAnswer);
    // const difference = Math.abs(guess - state.correctAnswer);
    
    // if (difference >= 50) {
    //     feedback = 'You\'re Ice Cold...';
    //   } else if (difference >= 30) {
    //     feedback = 'You\'re Cold...';
    //   } else if (difference >= 10) {
    //     feedback = 'You\'re Warm.';
    //   } else if (difference >= 1) {
    //     feedback = 'You\'re Hot!';
    //   } else {
    //     feedback = 'You got it!';
    //   }

    const auralStatus = generateAuralStatus(guesses, feedback)
    // const pluralize = guesses.length !== 1;

    // let  auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    // if (guesses.length > 0) {
    //   auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
    // }

    return {
        ...state,
        guesses,
        feedback,
        auralStatus
    }
  }

  if (action.type === RESTART_GAME) {
    return {
        guesses: [],
        feedback: 'Make your guess!',
        auralStatus: '',
        correctAnswer: Math.floor(Math.random() * 100) + 1
    }
  }
  return state;
};

export default guessReducer;