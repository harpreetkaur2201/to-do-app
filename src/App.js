import { useReducer, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { taskReducer } from "./reducer/taskReducer";

function App() {
    const [tasks, dispatch] = useReducer(taskReducer, []);
    const [text, setText] = useState("");
    const [editId, setEditId] = useState(null);

    return (
        <div className="app">
            <div className="app-header">
                <div className="logo"></div>

                <div>
                    <h1>My Tasks</h1>
                    <p className="count">{tasks.length} tasks</p>
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