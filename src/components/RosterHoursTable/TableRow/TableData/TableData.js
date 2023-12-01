import './TableData.css';

const TableData = props => {
    return (
        <td className={props.className} rowSpan={props.rowSpan} colSpan={props.colSpan}>{props.value}</td>
    )
};

export default TableData;