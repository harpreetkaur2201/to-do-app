import { useReducer, useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { taskReducer } from "./reducer/taskReducer";

function App() {

    const [tasks, dispatch] = useReducer(
        taskReducer,
        [],
        () => {
            const saved = localStorage.getItem("tasks");
            return saved ? JSON.parse(saved) : [];
        }
    );

    const [text, setText] = useState("");
    const [editId, setEditId] = useState(null);

    useEffect(() => {
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }, [tasks]);

    return (
        <main className="app">

            <h1>To-Do App</h1>

            <TaskForm
                text={text}
                setText={setText}
                editId={editId}
                setEditId={setEditId}
                dispatch={dispatch}
            />

            <p>Total Tasks: {tasks.length}</p>

            <TaskList
                tasks={tasks}
                dispatch={dispatch}
                setText={setText}
                setEditId={setEditId}
            />

        </main>
    );
}

export default App;