import { useReducer, useState, useEffect } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { taskReducer } from "./reducer/taskReducer";

function App() {
    const [tasks, dispatch] = useReducer(
        taskReducer,
        [],
        () => JSON.parse(localStorage.getItem("tasks")) || []
    );

    const [text, setText] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        localStorage.setItem(
            "tasks",
            JSON.stringify(tasks)
        );
    }, [tasks]);

    return (
        <div className="app">
            <div className="app-header">
                <img
                    src={`${process.env.PUBLIC_URL}/image.png`}
                    alt="logo"
                    className="logo"
                />

                <div>
                    <h1>My Tasks</h1>
                    <p className="count">
                        {tasks.length} tasks
                    </p>
                </div>
            </div>

            <TaskForm
                text={text}
                setText={setText}
                editId={editId}
                setEditId={setEditId}
                dispatch={dispatch}
            />

            <TaskList
                tasks={tasks}
                dispatch={dispatch}
                setText={setText}
                setEditId={setEditId}
            />
        </div>
    );
}

export default App;