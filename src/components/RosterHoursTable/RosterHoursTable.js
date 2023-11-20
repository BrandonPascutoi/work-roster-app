import { useEffect, useState } from 'react';
import './RosterHoursTable.css'
import DateInputCell from './DateUserInputTableData/DateUserInputTableData';
import TimeInputCell from './TimeUserInputTableData/TimeUserInputTableData';

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
                <tr>
                    <th rowSpan={4} colSpan={4} className='dark-brown'>Employee Information</th>
                    <th rowSpan={2} colSpan={2}>Name:</th>
                    <th rowSpan={2} colSpan={4}>Aisling McCurtin</th>
                    <th rowSpan={2} colSpan={4}>Brandon Pascutoi</th>
                    <th rowSpan={2} colSpan={4}>Mahan Salavati</th>
                    <th rowSpan={2} colSpan={4}>Anthony Cheung</th>
                </tr>
                <tr></tr>
                <tr className='light-brown'>
                    <th rowSpan={2} colSpan={2}>Empl no:</th>
                    <td rowSpan={2} colSpan={4}></td>
                    <td rowSpan={2} colSpan={4}></td>
                    <td rowSpan={2} colSpan={4}></td>
                    <td rowSpan={2} colSpan={4}></td>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2} className='dark-brown'>Mon</th>
                    <DateInputCell dateIncrement={0} rowSpan={2} colSpan={2}/>
                    <th colSpan={2}>Start:</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                </tr>
                <tr className='light-brown'>
                    <th colSpan={2}>Finish</th>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={2} className='dark-brown'>Tue</th>
                    <DateInputCell dateIncrement={1} rowSpan={2} colSpan={2}/>
                    <th colSpan={2}>Start:</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                </tr>
                <tr className='light-brown'>
                    <th colSpan={2}>Finish</th>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={2} className='dark-brown'>Wed</th>
                    <DateInputCell dateIncrement={2} rowSpan={2} colSpan={2}/>
                    <th colSpan={2}>Start:</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                </tr>
                <tr className='light-brown'>
                    <th colSpan={2}>Finish</th>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={2} className='dark-brown'>Thur</th>
                    <DateInputCell dateIncrement={3} rowSpan={2} colSpan={2}/>
                    <th colSpan={2}>Start:</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                </tr>
                <tr className='light-brown'>
                    <th colSpan={2}>Finish</th>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={2} className='dark-brown'>Fri</th>
                    <DateInputCell dateIncrement={4} rowSpan={2} colSpan={2}/>
                    <th colSpan={2}>Start:</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                </tr>
                <tr className='light-brown'>
                    <th colSpan={2}>Finish</th>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={2} className='dark-brown'>Sat</th>
                    <DateInputCell dateIncrement={5} rowSpan={2} colSpan={2}/>
                    <th colSpan={2}>Start:</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                </tr>
                <tr className='light-brown'>
                    <th colSpan={2}>Finish</th>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={2} className='dark-brown'>Sun</th>
                    <DateInputCell dateIncrement={6} rowSpan={2} colSpan={2}/>
                    <th colSpan={2}>Start:</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                    <TimeInputCell colSpan={2}/>
                    <th colSpan={2} className='light-brown'>Total↓</th>
                </tr>
                <tr className='light-brown'>
                    <th colSpan={2}>Finish</th>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                    <TimeInputCell colSpan={2}/>
                    <td colSpan={2}></td>
                </tr>
                <tr>
                    <th rowSpan={4} colSpan={6} className='dark-brown'>Total Week Hours</th>
                    <th colSpan={4}>Total Hours:</th>
                    <th colSpan={4}>Total Hours:</th>
                    <th colSpan={4}>Total Hours:</th>
                    <th colSpan={4}>Total Hours:</th>
                </tr>
                <tr className='light-brown'>
                    <td colSpan={4}></td>
                    <td colSpan={4}></td>
                    <td colSpan={4}></td>
                    <td colSpan={4}></td>
                </tr>
                <tr>
                    <th colSpan={4}>Signed:</th>
                    <th colSpan={4}>Signed:</th>
                    <th colSpan={4}>Signed:</th>
                    <th colSpan={4}>Signed:</th>
                </tr>
                <tr className='light-brown'>
                    <td colSpan={4}></td>
                    <td colSpan={4}></td>
                    <td colSpan={4}></td>
                    <td colSpan={4}></td>
                </tr>
            </tbody> : 
            <tbody>
                <tr className='dark-brown'>
                    <th rowSpan={4} colSpan={4}>Employee Information</th>
                    <th rowSpan={3} colSpan={2}>Monday</th>
                    <th rowSpan={3} colSpan={2}>Tuesday</th>
                    <th rowSpan={3} colSpan={2}>Wednesday</th>
                    <th rowSpan={3} colSpan={2}>Thursday</th>
                    <th rowSpan={3} colSpan={2}>Friday</th>
                    <th rowSpan={3} colSpan={2}>Saturday</th>
                    <th rowSpan={3} colSpan={2}>Sunday</th>
                    <th rowSpan={6} colSpan={4}>Total Week Hours</th>
                </tr>
                <tr></tr>
                <tr></tr>
                <tr className='light-blue'>
                    <td colSpan={2}>&gt;Insert Date&lt;</td>
                    <td colSpan={2}>&gt;Insert Date&lt;</td>
                    <td colSpan={2}>&gt;Insert Date&lt;</td>
                    <td colSpan={2}>&gt;Insert Date&lt;</td>
                    <td colSpan={2}>&gt;Insert Date&lt;</td>
                    <td colSpan={2}>&gt;Insert Date&lt;</td>
                    <td colSpan={2}>&gt;Insert Date&lt;</td>
                </tr>
                <tr>
                    <th rowSpan={1} colSpan={3}>Name</th>
                    <th rowSpan={2}>Weekly Hours</th>
                    <th rowSpan={2}>Start</th>
                    <th rowSpan={2} className='light-brown'>Finish</th>
                    <th rowSpan={2}>Start</th>
                    <th rowSpan={2} className='light-brown'>Finish</th>
                    <th rowSpan={2}>Start</th>
                    <th rowSpan={2} className='light-brown'>Finish</th>
                    <th rowSpan={2}>Start</th>
                    <th rowSpan={2} className='light-brown'>Finish</th>
                    <th rowSpan={2}>Start</th>
                    <th rowSpan={2} className='light-brown'>Finish</th>
                    <th rowSpan={2}>Start</th>
                    <th rowSpan={2} className='light-brown'>Finish</th>
                    <th rowSpan={2}>Start</th>
                    <th rowSpan={2} className='light-brown'>Finish</th>
                </tr>
                <tr>
                    <th rowSpan={1} colSpan={3} className='light-brown'>Employee Number</th>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Aisling McCurtin</th>
                    <th rowSpan={4}></th>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</td>
                </tr>
                <tr></tr>
                <tr>
                    <td rowSpan={2} colSpan={3} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                    <td rowSpan={2} colSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Brandon Pascutoi</th>
                    <th rowSpan={4}></th>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</td>
                </tr>
                <tr></tr>
                <tr>
                    <td rowSpan={2} colSpan={3} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                    <td rowSpan={2} colSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Mahan Salavati</th>
                    <th rowSpan={4}></th>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</td>
                </tr>
                <tr></tr>
                <tr>
                    <td rowSpan={2} colSpan={3} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                    <td rowSpan={2} colSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Anthony Cheung</th>
                    <th rowSpan={4}></th>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} contentEditable></td>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <td rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</td>
                </tr>
                <tr></tr>
                <tr>
                    <td rowSpan={2} colSpan={3} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2} className='light-brown'>Total:</th>
                    <td rowSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                    <td rowSpan={2} colSpan={2} className='light-brown' contentEditable></td>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
            </tbody>}
        </table>
        )
}

export default RosterHoursTable;