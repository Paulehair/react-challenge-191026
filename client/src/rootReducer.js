const initState = {
    isChecked: false,
    data: {},
    users: [],
    currentUser: {},
    skills: []
}

const rootReducer = (state = initState, action) => {
    switch(action.type) {
        case 'SET_DATA':
        let data = action.value;
        return {
            ...state,
            data
        }
        case 'SET_CHECKED':
            let isChecked = action.value;
            return {
                ...state,
                isChecked
            }
        case 'SET_USERS':
            let users = action.value
            return {
                ...state,
                users
            }
        case 'SET_CURRENTUSER':
            let currentUser = action.value
            return {
                ...state,
                currentUser
            }
        case 'SET_SKILLS':
            let skills = action.value
            return {
                ...state,
                skills
            }
        default:
            return state
    }
}

export default rootReducer;
