import React from 'react';
import './style.css';

import Counter from './components/counter';

export default function App() {
  return (
    <div>
      <h2>Counter</h2>
      <p>This a counter made with react and for testing redux!</p>
      <Counter />
    </div>
  );
}
