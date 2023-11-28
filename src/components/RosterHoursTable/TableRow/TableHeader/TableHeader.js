import './TableHeader.css';

const TableHeader = props => {
    return (
        <th className={props.className} rowSpan={props.rowSpan} colSpan={props.colSpan}>{props.value}</th>
    )
};

export default TableHeader;