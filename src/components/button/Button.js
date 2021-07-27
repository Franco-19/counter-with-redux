import React from 'react';

export default function Button({ text, actualState, propSetState }) {
  const makeOperation = () => {
    switch (text) {
      case '+':
        return propSetState(actualState + 1);
      case '-':
        if (actualState > 0) {
          return propSetState(actualState - 1);
        }
        return console.log('no se puede restar mas!');
      case 'reset':
        propSetState(0);
    }
  };

  return (
    <button
      onClick={() => {
        makeOperation(text);
      }}
    >
      {text}
    </button>
  );
}
