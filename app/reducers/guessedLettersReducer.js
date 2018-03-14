// import * as types from '../actions/types';

const wordLettersReducer = ( state = [], action ) => {
    const newState = state.slice();
    switch( action.type ) {
        case 'GOOD_GUESS':
        case 'BAD_GUESS':
            for( let i = 0; i < newState.length; i++ ) {
                if( newState[i].toLowerCase() === action.letter.toLowerCase() ) {
                    return newState;
                }
            }
            newState.push( action.letter.toLowerCase() );
            return newState;
        default:
            return newState;
    }
};

export default wordLettersReducer;
