import { useEffect, useState } from 'react';
import './RosterHoursTable.css';
import DateInputCell from './DateUserInputTableData/DateUserInputTableData';
import TimeInputCell from './TimeUserInputTableData/TimeUserInputTableData';
import TotalHoursWorkedValueCell from './TotalHoursWorkedValueCell/TotalHoursWorkedValueCell';
import TableRow from './TableRow/TableRow';
import TableHeader from './TableRow/TableHeader/TableHeader';
import TableData from './TableRow/TableData/TableData';

const RosterHoursTable = () => {

    const [isPortrait, setIsPortrait] = useState(window.matchMedia("(orientaion: portrait)").matches);

    useEffect(() => {
        const handleOrientationChange = event => {
            setIsPortrait(event.matches)
        }

        const portraitMediaQuery = window.matchMedia("(orientation: portrait)");
        portraitMediaQuery.addEventListener("change", handleOrientationChange);
        handleOrientationChange(portraitMediaQuery);

        return () => {
            portraitMediaQuery.removeEventListener("change", handleOrientationChange);
        };
        
        
    }, [])

    return (
        <table className='w-100 table-bordered'>
            {isPortrait ? <tbody>
                <TableRow>
                    <TableHeader rowSpan={4} colSpan={4} className="dark-brown" value='Employee Information' />
                    <TableHeader rowSpan={2} colSpan={2} value='Name:' />
                    <TableHeader rowSpan={2} colSpan={4} value='Aisling McCurtin' />
                    <TableHeader rowSpan={2} colSpan={4} value='Brandon Pascutoi' />
                    <TableHeader rowSpan={2} colSpan={4} value='Mahan Salavati' />
                    <TableHeader rowSpan={2} colSpan={4} value='Anthony Cheung' />
                </TableRow>
                <TableRow />
                <TableRow className='light-brown'>
                    <TableHeader rowSpan={2} colSpan={2} value="Empl no:"/>
                    <TableData rowSpan={2} colSpan={4} />
                    <TableData rowSpan={2} colSpan={4} />
                    <TableData rowSpan={2} colSpan={4} />
                    <TableData rowSpan={2} colSpan={4} />
                </TableRow>
                <TableRow />
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Mon" />
                    <DateInputCell dateIncrement={0} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Tue" />
                    <DateInputCell dateIncrement={1} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Wed" />
                    <DateInputCell dateIncrement={2} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Thur" />
                    <DateInputCell dateIncrement={3} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Fri" />
                    <DateInputCell dateIncrement={4} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Sat" />
                    <DateInputCell dateIncrement={5} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Sun" />
                    <DateInputCell dateIncrement={6} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={4} colSpan={6} className='dark-brown' value="Total Week Hours" />
                    <TableHeader colSpan={4} value="Total Hours:" />
                    <TableHeader colSpan={4} value="Total Hours:" />
                    <TableHeader colSpan={4} value="Total Hours:" />
                    <TableHeader colSpan={4} value="Total Hours:" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableData colSpan={4} />
                    <TableData colSpan={4} />
                    <TableData colSpan={4} />
                    <TableData colSpan={4} />
                </TableRow>
                <TableRow>
                    <TableHeader colSpan={4} value="Signed:"/>
                    <TableHeader colSpan={4} value="Signed:"/>
                    <TableHeader colSpan={4} value="Signed:"/>
                    <TableHeader colSpan={4} value="Signed:"/>
                </TableRow>
                <TableRow className='light-brown'>
                    <TableData colSpan={4} />
                    <TableData colSpan={4} />
                    <TableData colSpan={4} />
                    <TableData colSpan={4} />
                </TableRow>
            </tbody> : 
            <tbody>
                <TableRow className='dark-brown'>
                    <TableHeader rowSpan={4} colSpan={4} value="Employee Information" />
                    <TableHeader rowSpan={3} colSpan={2} value="Monday" />
                    <TableHeader rowSpan={3} colSpan={2} value="Tuesday" />
                    <TableHeader rowSpan={3} colSpan={2} value="Wednesday" />
                    <TableHeader rowSpan={3} colSpan={2} value="Thursday" />
                    <TableHeader rowSpan={3} colSpan={2} value="Friday" />
                    <TableHeader rowSpan={3} colSpan={2} value="Saturday" />
                    <TableHeader rowSpan={3} colSpan={2} value="Sunday" />
                    <TableHeader rowSpan={6} colSpan={4} className='dark-brown' value="Total Week Hours" />
                </TableRow>
                <TableRow></TableRow>
                <TableRow></TableRow>
                <TableRow className='light-blue'>
                    <TableData colSpan={2} value="&gt;Insert Date&lt;"/>
                    <TableData colSpan={2} value="&gt;Insert Date&lt;"/>
                    <TableData colSpan={2} value="&gt;Insert Date&lt;"/>
                    <TableData colSpan={2} value="&gt;Insert Date&lt;"/>
                    <TableData colSpan={2} value="&gt;Insert Date&lt;"/>
                    <TableData colSpan={2} value="&gt;Insert Date&lt;"/>
                    <TableData colSpan={2} value="&gt;Insert Date&lt;"/>
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={1} colSpan={3} value="Name" />
                    <TableHeader rowSpan={2} value="Weekly Hours" />
                    <TableHeader rowSpan={2} value="Start" />
                    <TableHeader rowSpan={2} className='light-brown' value="Finish" />
                    <TableHeader rowSpan={2} value="Start" />
                    <TableHeader rowSpan={2} className='light-brown' value="Finish" />
                    <TableHeader rowSpan={2} value="Start" />
                    <TableHeader rowSpan={2} className='light-brown' value="Finish" />
                    <TableHeader rowSpan={2} value="Start" />
                    <TableHeader rowSpan={2} className='light-brown' value="Finish" />
                    <TableHeader rowSpan={2} value="Start" />
                    <TableHeader rowSpan={2} className='light-brown' value="Finish" />
                    <TableHeader rowSpan={2} value="Start" />
                    <TableHeader rowSpan={2} className='light-brown' value="Finish" />
                    <TableHeader rowSpan={2} value="Start" />
                    <TableHeader rowSpan={2} className='light-brown' value="Finish" />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={1} colSpan={3} className='light-brown' value="Employee Number" />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={3} value="Aisling McCurtin" />
                    <TableHeader rowSpan={4} />
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} colSpan={4} value="Signed:" className="text-start"/>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableData rowSpan={2} colSpan={3} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} />
                    <TableData rowSpan={2} colSpan={2} className="light-brown" />
                    <TableHeader rowSpan={2} />
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={3} value="Brandon Pascutoi" />
                    <TableHeader rowSpan={4} />
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} colSpan={4} value="Signed:" className="text-start"/>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableData rowSpan={2} colSpan={3} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} />
                    <TableData rowSpan={2} colSpan={2} className="light-brown" />
                    <TableHeader rowSpan={2} />
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={3} value="Mahan Salavati" />
                    <TableHeader rowSpan={4} />
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} colSpan={4} value="Signed:" className="text-start"/>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableData rowSpan={2} colSpan={3} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} />
                    <TableData rowSpan={2} colSpan={2} className="light-brown" />
                    <TableHeader rowSpan={2} />
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={3} value="Anthony Cheung" />
                    <TableHeader rowSpan={4} />
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TimeInputCell rowSpan={2}/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} colSpan={4} value="Signed:" className="text-start"/>
                </TableRow>
                <TableRow></TableRow>
                <TableRow>
                    <TableData rowSpan={2} colSpan={3} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} className="light-brown" value="Total:"/>
                    <TimeInputCell rowSpan={2} className="light-brown"/>
                    <TableHeader rowSpan={2} />
                    <TableData rowSpan={2} colSpan={2} className="light-brown" />
                    <TableHeader rowSpan={2} />
                </TableRow>
                <TableRow></TableRow>
            </tbody>}
        </table>
        )
}

export default RosterHoursTable;