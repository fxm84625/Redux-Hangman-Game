/* Reducer for the wordLetters substate */
/* This reducer's state will be an array of objects */
/* where each object has keys: */
/* "letter": a 1 character string */
/* "guessed": a boolean */

// import * as types from '../actions/types';

const defaultWords = [
    {letter: 'H', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'R', guessed: false},
    {letter: 'I', guessed: false},
    {letter: 'Z', guessed: false},
    {letter: 'O', guessed: false},
    {letter: 'N', guessed: false},
    {letter: 'S', guessed: false}
];

const wordLettersReducer = ( state = defaultWords, action ) => {
    const newState = state.slice();
    switch( action.type ) {
        case 'GOOD_GUESS':
            for( let i = 0; i < newState.length; i++ ) {
                if( newState[i].letter.toLowerCase() === action.letter.toLowerCase() ) {
                    newState[i].guessed = true;
                }
            }
            return newState;
        case 'NEW_WORD':
            const newWordState = [];
            for( let i = 0; i < action.word.length; i++ ) {
                newWordState.push({
                    letter: action.word[i],
                    guessed: false
                });
            }
            return newWordState;
        default:
            return newState;
    }
};

export default wordLettersReducer;
