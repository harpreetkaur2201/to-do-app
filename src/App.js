import { useReducer, useEffect, useState } from "react";
import TaskForm from "./components/TaskForm";
import TaskList from "./components/TaskList";
import { taskReducer } from "./reducer/taskReducer";

function App(props) {
    return (
        <div className="app">

            {/* HEADER (put here) */}
            <div className="app-header">
                <div className="logo"></div>

                <div>
                    <h1>My Tasks</h1>
                    <p className="count">
                        {props.tasks.length} tasks
                    </p>
                </div>
            </div>

            {/* FORM */}
            <form className="task-form" onSubmit={props.handleSubmit}>
                <input
                    value={props.text}
                    onChange={(e) => props.setText(e.target.value)}
                    placeholder="What needs to be done?"
                />
                <button type="submit">+ ADD</button>
            </form>

            {/* TASK LIST */}
            <TaskList
                tasks={props.tasks}
                dispatch={props.dispatch}
                setText={props.setText}
                setEditId={props.setEditId}
            />

        </div>
    );
}

export default App;