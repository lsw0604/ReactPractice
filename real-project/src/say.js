import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hi');
  const onClickLeave = () => setMessage('bye');

  const [color, setColor] = useState('black');

  return (
    <>
      <button onClick={onClickEnter}>enter</button>
      <button onClick={onClickLeave}>exit</button>
      <h1 style={{ color }}>{message}</h1>
      <button style={{ color: 'red' }} onClick={() => setColor('red')}>
        red
      </button>
      <button style={{ color: 'green' }} onClick={() => setColor('green')}>
        green
      </button>
      <button style={{ color: 'blue' }} onClick={() => setColor('blue')}>
        blue
      </button>
    </>
  )
};

export default Say;