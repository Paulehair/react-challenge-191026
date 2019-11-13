const initState = {
    isChecked: false
}

const rootReducer = (state = initState, action) => {
    if (action.type === 'SET_CHECKED') {
        let isChecked = action.value;
        return {
            ...state,
            isChecked: isChecked
        }
    }
    return state;
}

export default rootReducer;