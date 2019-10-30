let initialState = {
    value: 0
};

function reducer(state = initialState, action) {
    switch (action.type) {
        case "Increment":
            return { ...state, value: parseInt(state.value + 1) };
        case "Decrement":
            return { ...state, value: parseInt(state.value - 1) };
        default:
            return state;
    }
}

export default reducer;