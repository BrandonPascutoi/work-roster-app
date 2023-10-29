import { useContext } from "react";
import { MyContext } from "../../../myContext";
import './DateUserInputTableData.css'

const DateInputCell = props => {
    const { date, setDate } = useContext(MyContext);

    if (date === '') {
        return (
        <td rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>&gt;Date&lt;</td>
        )
    } else {
        const dateObj = new Date(date)

        console.log(dateObj.getDate() + 1)
        return (
            <td rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>{date}</td>
        )
    }
    
}

export default DateInputCell;