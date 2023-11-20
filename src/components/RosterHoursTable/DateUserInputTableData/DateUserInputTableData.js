import React, { useContext } from "react";
import { MyContext } from "../../../myContext";
import './DateUserInputTableData.css'

const DateInputCell = props => {
    const { date } = useContext(MyContext);
    const [dateValue, setDateValue] = date;
    
    let dateCell = null;

    const dateObj = new Date(dateValue);

    if (dateValue === '') {
        dateCell = <td key={props.dateIncrement} rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>--/--/--</td>
    } else {
        dateObj.setDate(dateObj.getDate() + props.dateIncrement);
        dateCell = <td key={props.dateIncrement} rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>{`${dateObj.getDate()}/${dateObj.getMonth() + 1}/ ${dateObj.getFullYear()}`}</td>
    }

    return dateCell;
}

export default DateInputCell;