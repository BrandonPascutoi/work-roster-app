import './TableRow.css';
import TableHeader from './TableHeader/TableHeader';

const TableRow = () => {
    return (
        <tr>
            <TableHeader rowSpan={4} colSpan={4} className="dark-brown" value='Employee Information'/>
            <TableHeader rowSpan={2} colSpan={2} value='Name:'/>
            <TableHeader rowSpan={2} colSpan={4} value='Aisling McCurtin'/>
            <TableHeader rowSpan={2} colSpan={4} value='Brandon Pascutoi'/>
            <TableHeader rowSpan={2} colSpan={4} value='Mahan Salavati'/>
            <TableHeader rowSpan={2} colSpan={4} value='Anthony Cheung'/>
        </tr>
    )
}

export default TableRow;