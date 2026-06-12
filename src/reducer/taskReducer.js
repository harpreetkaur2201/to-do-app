export function taskReducer(state, action) {
    function generateColor() {
    const colors = [
        "#FF6B6B",
        "#6BCB77",
        "#4D96FF",
        "#FFD93D",
        "#845EC2",
        "#00C9A7",
        "#FF9671"
    ];

    return colors[Math.floor(Math.random() * colors.length)];
}
    switch (action.type) {

        case "ADD_TASK":
    return [
        ...state,
        {
            ...action.payload,
            color: generateColor()
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
                        text: action.payload.text,
                        date: action.payload.date
                    }
                    : task
            );

        default:
            return state;
    }
}