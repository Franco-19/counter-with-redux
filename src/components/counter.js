import React from 'react';

import CustomButton from './button/Button';

export default function Counter() {
  return (
    <div>
      <CustomButton text="+" />
      <CustomButton text="-" onClick={() => logButtonEvent('-')} />
      <CustomButton text="reset" />
    </div>
  );
}
