import React, { useContext } from "react";
import './TotalHoursWorkedValueCell.css';
import { MyContext } from "../../../myContext";

function TotalHoursWorkedValueCell() {
    const { totalHours } = useContext(MyContext);
    const [totalHoursvalue, setTotalHoursValue] = totalHours;

    return <td colSpan={2}>{totalHoursvalue}</td>
}

export default TotalHoursWorkedValueCell