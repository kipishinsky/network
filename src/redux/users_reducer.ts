import {getUsers} from '../api/Api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const VALUE_IS_FETCHING = 'VALUE_IS_FETCHING'
const STICKY_BUTTON = 'STICKY_BUTTON'


let initialState = {
    users: [],
    pageSize: 25,
    totalUsersCount: 25,
    currentPage: 1,
    isFetching: true,
    followingInProgress: []

}

const usersReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    // @ts-ignore
                    if (u.id === action.userId) {
                        // @ts-ignore
                        return {...u, followed: true};
                    }
                    return u;
                })
            };
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    // @ts-ignore
                    if (u.id === action.userId) {
                        // @ts-ignore
                        return {...u, followed: false};
                    }
                    return u;
                })
            };
        case SET_USERS:
            return {...state, users: action.userId};

        case SET_CURRENT_PAGE:
            return {...state, currentPage: action.pageNumber};

        case SET_TOTAL_COUNT:
            return {...state, totalUsersCount: action.totalCount};

        case VALUE_IS_FETCHING:
            return {...state, isFetching: action.fetching};

        case STICKY_BUTTON:
            return {
                ...state,
                followingInProgress: action.stickyButtonState
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id != action.userId)
            };

        default:
            return state;
    }
}


export const follow = (userId: any) => ({type: FOLLOW, userId});
export const unfollow = (userId: any) => ({type: UNFOLLOW, userId});
export const setUsers = (userId: any) => ({type: SET_USERS, userId});
export const setCurrentPage = (pageNumber: any) => ({type: SET_CURRENT_PAGE, pageNumber});
export const setTotalUsersCount = (totalCount: any) => ({type: SET_TOTAL_COUNT, totalCount});
export const setIsFetching = (fetching: any) => ({type: VALUE_IS_FETCHING, fetching});
export const setStateStickyButton = (stickyButtonState: any, userId: any) => ({
    type: STICKY_BUTTON,
    stickyButtonState,
    userId
})


export const getUsersThunkCreator = (currentPage: any, pageSize: any) => {
    return (dispatch: any) => {

        dispatch(setIsFetching(true));
        // @ts-ignore
        getUsers(currentPage, pageSize).then(data => {
            dispatch(setUsers(data.items));
            dispatch(setTotalUsersCount(data.totalCount));
            dispatch(setIsFetching(false));
        });
    };

};

export default usersReducer;