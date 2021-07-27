import React, { useState } from 'react';

import CustomButton from './button/Button';

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton text="+" actualState={count} propSetState={setCount} />
      <CustomButton text="-" actualState={count} propSetState={setCount} />
      <CustomButton text="reset" actualState={count} propSetState={setCount} />

      <button
        onClick={() => {
          console.log(count);
        }}
      >
        imprimir estado
      </button>

      <p>{count}</p>
    </div>
  );
}
