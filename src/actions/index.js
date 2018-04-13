

export const GUESS = 'GUESS';
export const makeGuess = (guess) => {
    return {
        type: GUESS,
        guess
    }
}

export const RESTART_GAME = 'RESTART_GAME';
export const restartGame = () => {
    return {
        type: RESTART_GAME
    }
}

