import React from 'react';

export default function Button({ text }) {
  const logButtonEvent = evento => {
    console.log(`El botón ${evento} ha sido presionado`);
  };

  return (
    <button
      onClick={() => {
        logButtonEvent(text);
      }}
    >
      {text}
    </button>
  );
}
