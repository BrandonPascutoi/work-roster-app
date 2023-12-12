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
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={0}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={1}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={2}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={3}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={4}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={5}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={6}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={7}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Tue" />
                    <DateInputCell dateIncrement={1} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={8}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={9}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={10}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={11}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={12}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={13}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={14}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={15}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Wed" />
                    <DateInputCell dateIncrement={2} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={16}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={17}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={18}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={19}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={20}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={21}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={22}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={23}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Thur" />
                    <DateInputCell dateIncrement={3} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={24}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={25}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={26}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={27}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={28}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={29}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={30}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={31}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Fri" />
                    <DateInputCell dateIncrement={4} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={32}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={33}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={34}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={35}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={36}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={37}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={38}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={39}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Sat" />
                    <DateInputCell dateIncrement={5} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={40}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={41}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={42}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={43}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={44}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={45}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={46}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={47}/>
                    <TotalHoursWorkedValueCell />
                </TableRow>
                <TableRow>
                    <TableHeader rowSpan={2} colSpan={2} className='dark-brown' value="Sun" />
                    <DateInputCell dateIncrement={6} rowSpan={2} colSpan={2}/>
                    <TableHeader colSpan={2} value="Start:" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={48}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={49}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={50}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={51}/>
                    <TableHeader colSpan={2} className='light-brown' value ="Total↓" />
                </TableRow>
                <TableRow className='light-brown'>
                    <TableHeader colSpan={2} value="Finish" />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={52}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={53}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={54}/>
                    <TotalHoursWorkedValueCell />
                    <TimeInputCell colSpan={2} timeInputCellArrayIndex={55}/>
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
                    <DateInputCell dateIncrement={0} colSpan={2}/>
                    <DateInputCell dateIncrement={1} colSpan={2}/>
                    <DateInputCell dateIncrement={2} colSpan={2}/>
                    <DateInputCell dateIncrement={3} colSpan={2}/>
                    <DateInputCell dateIncrement={4} colSpan={2}/>
                    <DateInputCell dateIncrement={5} colSpan={2}/>
                    <DateInputCell dateIncrement={6} colSpan={2}/>
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