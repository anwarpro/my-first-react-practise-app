import { useState } from 'react'

const AddTask = ({onAdd}) => {

    const [text, setText] = useState('')
    const [day, setDay] = useState('')
    const [reminder, setReminder] = useState(false)

    const onSubmit = (e) => {
        e.preventDefault()
        if (!text) {
            alert('Plase add a task')
            return
        }
        onAdd({ text, day, reminder })
        setText('')
        setDay('')
        setReminder(false)
    }

    return (
        <form className='add-form' onSubmit={onSubmit}>
            <div className="" id='task'>
                <label htmlFor="task">Task</label><br />
                <input type="text" className='form-input px-4 py-3 rounded' value={text}
                    onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="" id='day'>
                <label htmlFor="day">Day and time</label><br />
                <input type="text" className='form-input px-4 py-3 rounded' value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="" id='reminder'>
                <label htmlFor="reminder">Reminder</label>
                <input type="checkbox" className='form-checkbox mx-2' checked={reminder} value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>
            <input type="submit" value='Save Task' className='text-white py-2 px-3 bg-blue-500 rounded' />
        </form>
    )
}

export default AddTask
