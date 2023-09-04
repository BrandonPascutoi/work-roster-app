import './WeekStartingInput.css'

const WeekStartingInput = () => {
    return (
        <div className='weekStartingInput w-100 mt-3 d-flex'>
            <label htmlFor='dateInput' className='w-75 h-100 d-flex justify-content-evenly align-items-center'>
            Week starting:
                <input name='dateInput' type='date' className='h-100 p-0 text-center' id='dateInput' required></input>
            </label>
            <input type='submit'></input>
        </div>
    )
}

export default WeekStartingInput;