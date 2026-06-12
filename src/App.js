import './css/index.css';

import { useReducer, useEffect } from 'react';

import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';

import { taskReducer } from './reducer/taskReducer';

function App() {

    const [tasks, dispatch] = useReducer(
        taskReducer,
        [],
        () => {
            const savedTasks =
                localStorage.getItem('tasks');

            return savedTasks
                ? JSON.parse(savedTasks)
                : [];
        }
    );

    useEffect(() => {
        localStorage.setItem(
            'tasks',
            JSON.stringify(tasks)
        );
    }, [tasks]);

    return (
      <>
        <main className="app">

            <h1>To-Do App</h1>

            <TaskForm dispatch={dispatch} />

            <p className="count">
                Total Tasks: {tasks.length}
            </p>

        </main>
        <section>
          <TaskList
                tasks={tasks}
                dispatch={dispatch}
            />
        </section>
        </>
    );
}

export default App;