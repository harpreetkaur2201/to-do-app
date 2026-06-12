function TaskForm(props) {

    function handleSubmit(e) {
        e.preventDefault();

        if (!props.text.trim()) return;

        if (props.editId === null) {
            props.dispatch({
                type: "ADD_TASK",
                payload: {
                    id: Date.now(),
                    text: props.text,
                    completed: false,
                    date: new Date().toLocaleDateString()
                }
            });
        } else {
            props.dispatch({
                type: "UPDATE_TASK",
                payload: {
                    id: props.editId,
                    text: props.text,
                    date: new Date().toLocaleDateString()
                }
            });

            props.setEditId(null);
        }

        props.setText("");
    }

    return (
        <form className="task-form" onSubmit={handleSubmit}>
            <input
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}
                placeholder="Enter task..."
            />

            <button>
                {props.editId === null ? "Add" : "Update"}
            </button>
        </form>
    );
}

export default TaskForm;