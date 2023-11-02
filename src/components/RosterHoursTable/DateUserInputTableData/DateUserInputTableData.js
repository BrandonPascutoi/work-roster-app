import React, { useContext } from "react";
import { MyContext } from "../../../myContext";
import './DateUserInputTableData.css'

const DateInputCell = props => {
    const { date, setDate } = useContext(MyContext);
    let dateCell = null;

    const dateObj = new Date(date)

    if (date === '') {
        dateCell = <td key={props.dateIncrement} rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>&gt;Date&lt;</td>
    } else {
        dateObj.setDate(dateObj.getDate() + props.dateIncrement);
        dateCell = <td key={props.dateIncrement} rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>{`${dateObj.getDate()}/${dateObj.getMonth() + 1}/ ${dateObj.getFullYear()}`}</td>
    }

    return dateCell;
}

export default DateInputCell;