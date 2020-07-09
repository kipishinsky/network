const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';

let initialState = {
    users: [
        {id: 1, followed: false, name: 'Masha', status: 'manager', location: {city: 'Moscow', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'},
        {id: 2, followed: true, name: 'Dasha', status: 'logist', location: {city: 'Kazan', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'},
        {id: 3, followed: false, name: 'Sasha', status: 'storekeeper', location: {city: 'Zuevka', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'},
        {id: 4, followed: true, name: 'Misha', status: 'director', location: {city: 'Belgorod', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'},
        {id: 5, followed: false, name: 'Grisha', status: 'brand manager', location: {city: 'Ivanovo', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'},
        {id: 6, followed: true, name: 'Fisha', status: 'driver', location: {city: 'Aksay', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'},
        {id: 7, followed: false, name: 'Ira', status: 'supervisor', location: {city: 'Aspens', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'},
        {id: 8, followed: true, name: 'Lola', status: 'merchandiser', location: {city: 'Orsk', country: 'Russia'}, photo: 'https://te-st.ru/wp-content/uploads/2019/12/robot.jpg'}
    ]
}

const usersReducer = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }
        case SET_USERS:
            return {
                ...state,
                users: [...state.users, ...action.users]
            }
        default:
            return state;
    }
}

export default usersReducer;
export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUsersAC = (userId) => ({type: SET_USERS, userId})
