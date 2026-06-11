import { FaEdit, FaTrash, FaCheck } from 'react-icons/fa';

function TaskItem({ task, dispatch }) {

    const editTask = () => {

        const newText = prompt(
            'Edit Task:',
            task.text
        );

        if (!newText) return;

        dispatch({
            type: 'UPDATE_TASK',
            payload: {
                id: task.id,
                text: newText,
                date: new Date().toLocaleDateString()
            }
        });
    };

    return (
        <div
            className={
                task.completed
                    ? 'task completed'
                    : 'task'
            }
        >
            <div>
                <h3>{task.text}</h3>
                <p>Updated: {task.date}</p>
            </div>

            <div className="icons">

                <FaCheck
                    onClick={() =>
                        dispatch({
                            type: 'TOGGLE_COMPLETE',
                            payload: task.id
                        })
                    }
                />

                <FaEdit onClick={editTask} />

                <FaTrash
                    onClick={() =>
                        dispatch({
                            type: 'DELETE_TASK',
                            payload: task.id
                        })
                    }
                />

            </div>
        </div>
    );
}

export default TaskItem;