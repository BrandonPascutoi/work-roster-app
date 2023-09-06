import './WeekStartingInput.css';

const WeekStartingInput = () => {
    const handleSubmit = (event) => {
        event.preventDefault(); // Prevent the default form submission behavior
        // You can handle the form submission logic here
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