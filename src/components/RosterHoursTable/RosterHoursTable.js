import './RosterHoursTable.css'

const RosterHoursTable = () => {
    return (
        <table className='mt-3 h-100 w-100 table-bordered'>
            <tbody>
                <tr>
                    <th rowSpan={4}>Employee Information</th>
                    <th rowSpan={3}>Monday</th>
                    <th rowSpan={3}>Tuesday</th>
                    <th rowSpan={3}>Wednesday</th>
                    <th rowSpan={3}>Thursday</th>
                    <th rowSpan={3}>Friday</th>
                    <th rowSpan={3}>Saturday</th>
                    <th rowSpan={3}>Sunday</th>
                    <th rowSpan={6}>Total Week Hours</th>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr></tr>
            </tbody>
        </table>
    )
}

export default RosterHoursTable;