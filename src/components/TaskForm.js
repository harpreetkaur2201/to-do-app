import { useState } from 'react';

function TaskForm({ dispatch }) {

    const [task, setTask] = useState('');

    const handleSubmit = event => {
        event.preventDefault();

        if (!task.trim()) return;

        dispatch({
            type: 'ADD_TASK',
            payload: {
                id: Date.now(),
                text: task,
                completed: false,
                date: new Date().toLocaleDateString()
            }
        });

        setTask('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder="Enter a task"
                value={task}
                onChange={event => setTask(event.target.value)}
            />

            <button type="submit">
                Add Task
            </button>
        </form>
    );
}

export default TaskForm;