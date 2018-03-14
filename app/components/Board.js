import React from 'react';
import PropTypes from 'prop-types';
import Box from './Box';

const Board = ({ wordLetters }) => {
    let key = 0;
    return (
      <div style={{'display': 'flex'}}>
        {
          wordLetters.map(letter => <Box key={key++} letter={letter}/>)
        }
      </div>
  );
};

Board.propTypes = {
    wordLetters: PropTypes.array
};

export default Board;
