export function taskReducer(state, action) {

    function getDateTime() {
        const now = new Date();

        return {
            date: now.toLocaleDateString(),
            time: now.toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit"
            })
        };
    }

    switch (action.type) {

        case "ADD_TASK":
            return [
                ...state,
                {
                    ...action.payload,
                    ...getDateTime()
                }
            ];

        case "DELETE_TASK":
            return state.filter(task => task.id !== action.payload);

        case "TOGGLE_TASK":
            return state.map(task =>
                task.id === action.payload
                    ? { ...task, completed: !task.completed }
                    : task
            );

        case "UPDATE_TASK":
            return state.map(task =>
                task.id === action.payload.id
                    ? {
                        ...task,
                        text: action.payload.text
                    }
                    : task
            );

        default:
            return state;
    }
}