import PropTypes from 'prop-types';
import React from 'react';
import { connect } from 'react-redux';
import Man from '../components/Man';
import Board from '../components/Board';

const GameContainer = ({ badGuesses, wordLetters, guessedLetters, onBadGuess, onGoodGuess, onNewWord }) => {
    let input;
    let newWord;
    const letterInAnswer = letter => wordLetters.some(
        letterObj => letterObj.letter.toLowerCase() === letter.toLowerCase() );
    const letterAlreadyGuessed = letter => guessedLetters.some(
        letterObj => letterObj.toLowerCase() === letter.toLowerCase() );
    return (
        <div>
            <Man badGuesses={badGuesses} />
            <Board wordLetters={wordLetters} />
            <input type="text" placeholder="Guess a Letter"
                value=""
                ref={node => {input = node;}}
                onChange={ () => {
                    const letter = input.value;
                    if( letterAlreadyGuessed( letter ) ) return;
                    if( letterInAnswer( letter ) ) onGoodGuess( letter );
                    else onBadGuess( letter );
                }}
            />
            <br/>
            <input type="text" ref={node => {newWord = node;}} placeholder="Custom Hangman Word" style={{ display: 'inline-block' }}/>
            <input type="submit" value="Submit" style={{ display: 'inline-block' }} onClick={ () => { onNewWord( newWord.value ); } }/>
        </div>
    );
};

GameContainer.propTypes = {
    badGuesses: PropTypes.number,
    wordLetters: PropTypes.array,
    guessedLetters: PropTypes.array,
    onBadGuess: PropTypes.func,
    onGoodGuess: PropTypes.func,
    onNewWord: PropTypes.func
};

const mapStateToProps = ( state ) => {
    return {
        badGuesses: state.badGuesses,
        wordLetters: state.wordLetters,
        guessedLetters: state.guessedLetters
    };
};

const mapDispatchToProps = ( dispatch ) => {
    return {
        onBadGuess: ( inputLetter ) => dispatch({
            type: 'BAD_GUESS',
            letter: inputLetter
        }),
        onGoodGuess: ( inputLetter ) => dispatch({
            type: 'GOOD_GUESS',
            letter: inputLetter
        }),
        onNewWord: ( inputWord ) => dispatch({
            type: 'NEW_WORD',
            word: inputWord
        })
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GameContainer);
