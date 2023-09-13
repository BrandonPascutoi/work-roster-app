import { useContext } from "react";
import './DateUserInputTableData.css'

const DateInputCell = props => {
    return (
        <td rowSpan={props.rowSpan} colSpan={props.colSpan} className='light-blue date'>&gt;Date&lt;</td>
    )
}

export default DateInputCell;