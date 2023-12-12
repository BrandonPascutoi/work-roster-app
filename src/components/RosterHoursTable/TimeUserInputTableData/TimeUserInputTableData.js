import React, { useContext, useState } from 'react';
import './TimeUserInputTableData.css'
import { MyContext } from '../../../myContext';

const timeInputCellsArrayAndStates = () => {
  
}

function TimeInputCell(props) {
  const [inputValue, setInputValue] = useState('');
  const {startTimes, finishTimes} = useContext(MyContext);

  const [startTimesValue, setStartTimeValue] = startTimes;
  const [finishTimesValue, setFinishTimeValue] = finishTimes;

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const timeInputCells = [];

  for (let i = 0; i < 56; i++) {
    timeInputCells.push(
      <td rowSpan={props.rowSpan} colSpan={props.colSpan}>
        <input
          type="time"
          value={inputValue}
          onChange={handleInputChange}
          className={`timeInputCell${i} h-100 w-100 d-flex justify-content-between align-items-center`}
          id='timeInputCell'
        />
      </td>
    )
    //setStartTimeValue({ ...startTimesValue, })
  }

  console.log(timeInputCells);
  console.log(startTimesValue);

  return (
    timeInputCells[props.timeInputCellArrayIndex]
  );
}

export default TimeInputCell;