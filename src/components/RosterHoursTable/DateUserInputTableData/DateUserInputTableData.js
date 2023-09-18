import { useContext } from "react";
import { MyContext } from "../../../myContext";
import './DateUserInputTableData.css'

const DateInputCell = props => {
    const { date, setDate } = useContext(MyContext);

    return (
        <td rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>&gt;Date&lt;</td>
    )
}

export default DateInputCell;