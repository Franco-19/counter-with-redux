import React, { useState } from 'react';
import { connect } from 'react-redux';

import CustomButton from './button/Button';

function Counter({ count }) {
  // const [count, setCount] = useState(0);

  return (
    <div>
      <CustomButton text="+" />
      <CustomButton text="-" />
      <CustomButton text="reset" />

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

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

export default connect(
  mapStateToProps,
  null
)(Counter);
