export function taskReducer(state, action) {
    switch (action.type) {
        case 'ADD_TASK':
            return [...state, action.payload];

        case 'DELETE_TASK':
            return state.filter(
                task => task.id !== action.payload
            );

        case 'TOGGLE_COMPLETE':
            return state.map(task =>
                task.id === action.payload
                    ? {
                        ...task,
                        completed: !task.completed
                    }
                    : task
            );

        case 'UPDATE_TASK':
            return state.map(task =>
                task.id === action.payload.id
                    ? {
                        ...task,
                        text: action.payload.text,
                        date: action.payload.date
                    }
                    : task
            );

        default:
            return state;
    }
}

export default taskReducer;