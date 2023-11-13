import React, { useState } from 'react';
import './TimeUserInputTableData.css'

function TimeInputCell(props) {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  return (
    <td rowSpan={props.rowSpan} colSpan={props.colSpan}>
      <input
        type="time"
        value={inputValue}
        onChange={handleInputChange}
        className='timeInputCell h-100 w-100 d-flex justify-content-between align-items-center'
      />
    </td>
  );
}

export default TimeInputCell;