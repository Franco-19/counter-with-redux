import React from 'react';

import { connect } from 'react-redux'
import { addValue, removeValue, resetValue } from '../../actions.js';

import './Button-styles.css'

function Button({ text, count, addValue, removeValue, resetValue }) {
  const makeOperation = () => {
    switch (text) {
      case '+':
        return addValue();
      case '-':
        if (count > 0) {
          return removeValue();
        }
        return console.log('no se puede restar mas!');
      case 'reset':
        resetValue();
    }
  };

  return (
    <button
      onClick={() => {
        makeOperation(text);
      }}
      className='bg-red-500'
    >
      {text}
    </button>
  );
}

const mapDispatchToProps = {
  addValue,
  removeValue,
  resetValue
}

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Button);