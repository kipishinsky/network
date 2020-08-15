import {profileResponseDataType} from '../components/profile/ProfileContainer'
import {getMyPageProfileAPI, getStatusProfileAPI, updateStatusProfileAPI} from '../api/Api'

const PUSH_NEW_POST_PROFILE = 'PUSH_NEW_POST_PROFILE'
const SET_USERS_PROFILE = 'SET_USERS'
const SET_STATUS_PROFILE = 'SET_STATUS_PROFILE'

type postsType = {
    id: number,
    message: string,
    likesCount: number
}

type profileStateType = {
    posts: Array<postsType>,
    profile: null,
    status: string
}

let initialState: profileStateType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 15},
        {id: 2, message: 'Hi, how are you?', likesCount: 3},
        {id: 3, message: 'How do you usually spend your free time?', likesCount: 24},
        {id: 4, message: 'I\'m visiting my granny this weekend', likesCount: 10},
        {id: 5, message: 'Frontend is more visual than backend', likesCount: 5}
    ],
    profile: null,
    status: ''
}

type pushNewPostProfileACType = {
    type: 'PUSH_NEW_POST_PROFILE',
    newPostText: string
}

type setUsersProfileType = {
    type: 'SET_USERS_PROFILE',
    profile: Array<profileResponseDataType>
}

type ActionType = pushNewPostProfileACType | setUsersProfileType

const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case PUSH_NEW_POST_PROFILE:
            let newPost = {
                id: 6,
                message: action.newPostText,
                likesCount: 0
            }
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            }

        case SET_USERS_PROFILE:
            return {...state, profile: action.profile}

        case SET_STATUS_PROFILE:
            return {...state, status: action.status}

        default:
            return state
    }
}


export const pushNewPostProfileCreator = (newValueText: string) => ({type: PUSH_NEW_POST_PROFILE, newValueText})
export const setUsersProfileCreator = (userId: string) => ({type: SET_USERS_PROFILE, profile: userId})
export const setStatusProfileCreator = (status: string) => ({type: SET_STATUS_PROFILE, status})


export const getMyProfilePageThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        // @ts-ignore
        getMyPageProfileAPI(userId).then((data: any) => {
            dispatch(setUsersProfileCreator(data))
        })
    }
}

export const setStatusProfileThunkCreator = (userId: string) => {
    return (dispatch: any) => {
        // @ts-ignore
        getStatusProfileAPI(userId).then((data: any) => {
            dispatch(setStatusProfileCreator(data))
        })
    }
}

export const updateStatusProfileThunkCreator = (statusText: string) => {
    return (dispatch: any) => {
        // @ts-ignore
        updateStatusProfileAPI(statusText).then((data: any) => {
            if (data.resultCode === 0) {
                dispatch(setStatusProfileCreator(statusText))
            }
        })
    }
}

export default profileReducer