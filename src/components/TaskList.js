import { FaCheck, FaPen, FaTrash } from "react-icons/fa";

function TaskList(props) {
   const activeTasks = props.tasks.filter(t => !t.completed);
   const doneTasks = props.tasks.filter(t => t.completed);

    if (props.tasks.length === 0) {
        return <p>No tasks yet</p>;
    }

    return (
<div
    className={task.completed ? "task done" : "task"}
    style={{ borderLeft: `6px solid ${task.color}` }}
>
            {props.tasks.map(task => (
                <div
                    key={task.id}
                    className={task.completed ? "task done" : "task"}
                >

                    <div>
                        <h3>{task.text}</h3>
                        <p>{task.date}</p>
                    </div>

                    <div className="buttons">

                        <button
                            onClick={() =>
                                props.dispatch({
                                    type: "TOGGLE_TASK",
                                    payload: task.id
                                })
                            }
                        >
                            <FaCheck />
                        </button>

                        <button
                            onClick={() => {
                                props.setText(task.text);
                                props.setEditId(task.id);
                            }}
                        >
                            <FaPen />
                        </button>

                        <button
                            onClick={() =>
                                props.dispatch({
                                    type: "DELETE_TASK",
                                    payload: task.id
                                })
                            }
                        >
                            <FaTrash />
                        </button>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default TaskList;