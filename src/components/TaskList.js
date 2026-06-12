function TaskList(props) {

    function startEdit(task) {
        props.setText(task.text);
        props.setEditId(task.id);
    }

    return (
        <div>

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

                        <button onClick={() =>
                            props.dispatch({
                                type: "TOGGLE",
                                payload: task.id
                            })
                        }>
                            ✔
                        </button>

                        <button onClick={() => startEdit(task)}>
                            ✏️
                        </button>

                        <button onClick={() =>
                            props.dispatch({
                                type: "DELETE",
                                payload: task.id
                            })
                        }>
                            🗑
                        </button>

                    </div>

                </div>
            ))}

        </div>
    );
}

export default TaskList;