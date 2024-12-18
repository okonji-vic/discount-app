import React, { useState } from 'react';
function ToggleButton() {
    let [isActive, setIsActive] = useState(false);
    function toggleButton() {
        // methods to toggle the button's active state are below and are all correct
        setIsActive(isActive === false ? true : false);
        setIsActive(!isActive);
        setIsActive((isActive) => !isActive);
        setIsActive((prevIsActive) => !prevIsActive);
        
    }
    // Step 1: Create a state variable to track the button's active state
    // Step 2: Function to toggle the button's active state
    return (
      <button
        style={{
          backgroundColor: isActive ? 'green' : 'red',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={toggleButton}

      // Step 3: Add a click event handler to toggle the button's active state
      // Step 4: Use the state variable to conditionally render the button's text and color
      >
        {isActive ? 'ON' : 'OFF'}
      </button>
    )
  }
    export default ToggleButton;
  