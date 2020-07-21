const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT';
const VALUE_IS_FETCHING = 'VALUE_IS_FETCHING';


let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: true
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
            return {...state, users: action.userId}

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber}

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount}

        case VALUE_IS_FETCHING:
            return {...state, isFetching: action.fetching}

        default:
            return state;
    }
}

export default usersReducer;
export const follow = (userId) => ({type: FOLLOW, userId})
export const unfollow = (userId) => ({type: UNFOLLOW, userId})
export const setUsers = (userId) => ({type: SET_USERS, userId})
export const setCurrentPage = (pageNumber) => ({type: SET_CURRENT_PAGE, pageNumber})
export const setTotalUsersCount = (totalCount) => ({type: SET_TOTAL_COUNT, totalCount})
export const setIsFetching = (fetching) => ({type: VALUE_IS_FETCHING, fetching})

