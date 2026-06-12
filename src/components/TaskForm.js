function TaskForm(props) {

    function handleSubmit(e) {
        e.preventDefault();

        if (!props.text.trim()) return;

        if (props.editId === null) {

            props.dispatch({
                type: "ADD",
                payload: {
                    id: Date.now(),
                    text: props.text,
                    completed: false,
                    date: new Date().toLocaleDateString()
                }
            });

        } else {

            props.dispatch({
                type: "EDIT",
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
        <form onSubmit={handleSubmit} className="task-form">

            <input
                type="text"
                placeholder="New Task"
                value={props.text}
                onChange={(e) => props.setText(e.target.value)}
            />

            <button type="submit">
                {props.editId === null ? "Add" : "Edit"}
            </button>

        </form>
    );
}

export default TaskForm;