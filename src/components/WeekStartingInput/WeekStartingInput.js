import './WeekStartingInput.css'

const WeekStartingInput = () => {
    return (
        <div className='weekStartingInput w-100 mt-3'>
            <label className='w-100 h-100 d-flex justify-content-center'>Week starting:
            <input type='date' className='h-100 w-50 p-0' id='dateInput'></input>
            </label>
        </div>
    )
}

export default WeekStartingInput;