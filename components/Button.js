import React, { useState } from 'react';

function Button() {
  const [clicked, setClicked] = useState(false);

  const handleClick = () => {
    setClicked(true);
  };

  return (
    <button
      onClick={handleClick}
      style={{
        backgroundColor: clicked ? 'red' : 'blue',
        color: 'white',
        padding: '10px 20px',
        borderRadius: '5px',
        border: 'none',
        cursor: 'pointer',
      }}
    >
      {clicked ? 'Button Clicked' : 'Click Me'}
    </button>
  );
}

export default Button;

