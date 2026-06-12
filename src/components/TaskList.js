import {
    FaClipboardList,
    FaCheck,
    FaPen,
    FaTrash
} from "react-icons/fa6";

function TaskList(props) {

    function startEdit(task) {
        props.setText(task.text);
        props.setEditId(task.id);
    }

    if (props.tasks.length === 0) {
        return (
            <div className="empty-state">

                <FaClipboardList className="empty-icon" />

                <h3>No tasks yet</h3>
                <p>Add your first task to get started</p>

            </div>
        );
    }

    return (
        <div className="task-list">

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

                        {/* COMPLETE */}
                        <button
                            className="btn complete"
                            onClick={() =>
                                props.dispatch({
                                    type: "TOGGLE",
                                    payload: task.id
                                })
                            }
                        >
                            <FaCheck />
                        </button>

                        {/* EDIT */}
                        <button
                            className="btn edit"
                            onClick={() => startEdit(task)}
                        >
                            <FaPen />
                        </button>

                        {/* DELETE */}
                        <button
                            className="btn delete"
                            onClick={() =>
                                props.dispatch({
                                    type: "DELETE",
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