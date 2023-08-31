import React, { useState } from 'react';

function TimeInputCell() {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    const inputText = event.target.value;

    // Validate input format
    if (/^\d{0,2}:\d{0,2}$/.test(inputText)) {
      setInputValue(inputText);
    }
  };

  return (
    <td>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="00:00"
      />
    </td>
  );
}

export default TimeInputCell;