import { useEffect, useState } from "react"
import AddTask from "./AddTask"
import Tasks from "./Tasks"


const Home = ({showAddTask}) => {
    const [tasks, setTasks] = useState([])
    // const showAddTask = false
    console.log(showAddTask)

    useEffect(() => {
        const getTasks = async () => {
            const taskFromServer = await fetchTasks()
            setTasks(taskFromServer)
        }
        getTasks()
    }, [])

    const fetchTask = async (id) => {
        const res = await fetch(`http://localhost:5000/tasks/${id}`)
        const data = await res.json()
        return data
    }

    const fetchTasks = async (id) => {
        const res = await fetch('http://localhost:5000/tasks')
        const data = await res.json()
        return data
    }

    const onDelete = async (id) => {

        await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'DELETE'
        })

        setTasks(tasks.filter((task) => task.id !== id))
    }



    const toggleReminder = async (id) => {

        const taskToToggle = await fetchTask(id)
        const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

        const res = await fetch(`http://localhost:5000/tasks/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(updTask)
        })

        const data = await res.json()

        setTasks(
            tasks.map((task) =>
                task.id === id ? { ...task, reminder: data.reminder } : task)
        )
    }

    const addTask = async (task) => {
        const res = await fetch('http://localhost:5000/tasks', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(task)
        })

        const data = await res.json()
        setTasks([...tasks, data])
    }
    return (
        <>
            {
                showAddTask && <AddTask onAdd={addTask} />
            }

            {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={onDelete} onToggle={toggleReminder} /> : 'No Tasks to Show'}
        </>
    )
}

export default Home
