import TaskItem from './TaskItem';

function TaskList({ tasks, dispatch }) {

    if (tasks.length === 0) {
        return (
            <p className="empty">
                No tasks available.
            </p>
        );
    }

    return (
        <div>
            {tasks.map(task => (
                <TaskItem
                    key={task.id}
                    task={task}
                    dispatch={dispatch}
                />
            ))}
        </div>
    );
}

export default TaskList;