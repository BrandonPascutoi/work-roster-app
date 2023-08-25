import { useEffect, useState } from 'react';
import './RosterHoursTable.css'

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
        <table className='mt-3 h-100 w-100 table-bordered'>
            {isPortrait ? <tbody>
                <tr>
                    <th rowSpan={4} colSpan={4}>Employee Information</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
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
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2}>Mon</th>
                    <th rowSpan={2} colSpan={2}>&gt;Date&lt;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2}>Tue</th>
                    <th rowSpan={2} colSpan={2}>&gt;Date&lt;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2}>Wed</th>
                    <th rowSpan={2} colSpan={2}>&gt;Date&lt;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2}>Thur</th>
                    <th rowSpan={2} colSpan={2}>&gt;Date&lt;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2}>Fri</th>
                    <th rowSpan={2} colSpan={2}>&gt;Date&lt;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2}>Sat</th>
                    <th rowSpan={2} colSpan={2}>&gt;Date&lt;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={2}>Sun</th>
                    <th rowSpan={2} colSpan={2}>&gt;Date&lt;</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={4} colSpan={6}>Total Hours</th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th></th>
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
                <tr></tr>
            </tbody> : 
            <tbody>
                <tr>
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
                <tr>
                    <th colSpan={2}>&gt;Insert Date&lt;</th>
                    <th colSpan={2}>&gt;Insert Date&lt;</th>
                    <th colSpan={2}>&gt;Insert Date&lt;</th>
                    <th colSpan={2}>&gt;Insert Date&lt;</th>
                    <th colSpan={2}>&gt;Insert Date&lt;</th>
                    <th colSpan={2}>&gt;Insert Date&lt;</th>
                    <th colSpan={2}>&gt;Insert Date&lt;</th>
                </tr>
                <tr>
                    <th rowSpan={1} colSpan={3}>Name</th>
                    <th rowSpan={2} >Weekly Hours</th>
                    <th rowSpan={2} >Start</th>
                    <th rowSpan={2} >Finish</th>
                    <th rowSpan={2} >Start</th>
                    <th rowSpan={2} >Finish</th>
                    <th rowSpan={2} >Start</th>
                    <th rowSpan={2} >Finish</th>
                    <th rowSpan={2} >Start</th>
                    <th rowSpan={2} >Finish</th>
                    <th rowSpan={2} >Start</th>
                    <th rowSpan={2} >Finish</th>
                    <th rowSpan={2} >Start</th>
                    <th rowSpan={2} >Finish</th>
                    <th rowSpan={2} >Start</th>
                    <th rowSpan={2} >Finish</th>
                </tr>
                <tr>
                    <th rowSpan={1} colSpan={3}>Employee Number</th>
                </tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Aisling McCurtin</th>
                    <th rowSpan={4}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={2}></th>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Brandon Pascutoi</th>
                    <th rowSpan={4}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</th>
                </tr>
                <tr></tr>
                <tr>
                <th rowSpan={2} colSpan={3}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={2}></th>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Mahan Salavati</th>
                    <th rowSpan={4}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={2}></th>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}>Anthony Cheung</th>
                    <th rowSpan={4}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={4} className='text-start ps-1'>Signed:</th>
                </tr>
                <tr></tr>
                <tr>
                    <th rowSpan={2} colSpan={3}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}>Total:</th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2}></th>
                    <th rowSpan={2} colSpan={2}></th>
                    <th rowSpan={2}></th>
                </tr>
                <tr></tr>
            </tbody>}
        </table>
        )
}

export default RosterHoursTable;