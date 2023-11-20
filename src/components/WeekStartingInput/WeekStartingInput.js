import './WeekStartingInput.css';
import { useContext, useEffect } from "react";
import { MyContext } from '../../myContext';

const WeekStartingInput = () => {
    const { date } = useContext(MyContext);
    const [dateValue, setDateValue] = date;

    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        setDateValue(document.getElementById("dateInput").value);
    };

    return (
        <form className='weekStartingInput w-100 mt-3 d-flex' onSubmit={handleSubmit}>
            <label htmlFor='dateInput' className='w-75 h-100 d-flex justify-content-evenly align-items-center'>
                Week starting:
                <input name='dateInput' type='date' className='h-100 p-0 text-center' id='dateInput' required />
            </label>
            <button type='submit'>Submit</button>
        </form>
    );
};

export default WeekStartingInput;