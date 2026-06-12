import { FaCheck, FaPen, FaTrash } from "react-icons/fa";

function TaskList(props) {
    if (props.tasks.length === 0) {
        return <p>No tasks yet</p>;
    }

    return (
        <div>
            {props.tasks.map(task => (
                <div className="task-row" key={task.id}>

                    {/* LEFT DATE COLUMN */}
                    <div className="task-date">
                        <div
                            className="dot"
                            style={{ background: task.color }}
                        ></div>

                        <div className="date-box">
                            <div className="date-num">
                                {new Date(task.date).getDate()}
                            </div>

                            <div className="date-day">
                                {new Date(task.date)
                                    .toLocaleDateString("en-US", {
                                        weekday: "short"
                                    })
                                    .toUpperCase()}
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div
                        className={task.completed ? "task-card done" : "task-card"}
                        style={{ background: task.color }}
                    >
                        <div className="task-info">
                            <h3>{task.text}</h3>
                            <p>{task.time}</p>
                        </div>

                        <div className="task-actions">
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
                </div>
            ))}
        </div>
    );
}

export default TaskList;