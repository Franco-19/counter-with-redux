import React from 'react';

import CustomButton from './button/Button';

export default function Counter() {
  const logButtonEvent = evento => {
    console.log(`El botón ${evento} ha sido presionado`);
  };

  return (
    <div>
      <CustomButton
        text="+"
        onClick={() => {
          logButtonEvent('+');
        }}
      />
      <CustomButton text="-" onClick={() => logButtonEvent('-')} />
      <CustomButton text="reset" />
    </div>
  );
}
