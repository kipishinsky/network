import {profileResponseDataType} from '../components/profile/ProfileContainer'
import {getMyAccountPage, getMyProfilePageAPI} from '../api/Api'
import {setAuthUserData} from './auth_reducer'

const PUSH_NEW_POST_PROFILE = 'PUSH_NEW_POST_PROFILE'
const ADD_NEW_VALUE_TEXT = 'ADD_NEW_VALUE_TEXT'
const SET_USERS_PROFILE = 'SET_USERS'

type postsType = {
    id: number,
    message: string,
    likesCount: number
}

type profileStateType = {
    posts: Array<postsType>,
    newPostText: string,
    profile: null
}

let initialState: profileStateType = {
    posts: [
        {id: 1, message: 'Hi', likesCount: 15},
        {id: 2, message: 'Hi, how are you?', likesCount: 3},
        {id: 3, message: 'How do you usually spend your free time?', likesCount: 24},
        {id: 4, message: "I'm visiting my granny this weekend", likesCount: 10},
        {id: 5, message: 'Frontend is more visual than backend', likesCount: 5}
    ],
    newPostText: 'enter text...',
    profile: null
}

type pushNewPostProfileACType = {
    type: 'PUSH_NEW_POST_PROFILE'
}

type addNewValueProfileACType = {
    type: 'ADD_NEW_VALUE_TEXT',
    newText: string
}

type setUsersProfileType = {
    type: 'SET_USERS_PROFILE',
    profile: Array<profileResponseDataType>
}

type ActionType = pushNewPostProfileACType | addNewValueProfileACType | setUsersProfileType

const profileReducer = (state = initialState, action: any) => {

    switch (action.type) {
        case PUSH_NEW_POST_PROFILE:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                posts: [...state.posts, newPost],
                newPostText: ''
            };
        case ADD_NEW_VALUE_TEXT:
            return {
                ...state,
                newPostText: action.newText
            }
        case SET_USERS_PROFILE:

            return {...state, profile: action.profile}
        default:
            return state
    }
}


export const pushNewPostProfileCreator = () => ({type: PUSH_NEW_POST_PROFILE})
export const addNewValueProfileCreator = (text: string) => ({type: ADD_NEW_VALUE_TEXT, newText: text})
export const setUsersProfile = (userId: string) => ({type: SET_USERS_PROFILE, profile: userId})

export const getMyProfilePageThunkCreator = (userId: number) => {
    return (dispatch: any) => {
        // @ts-ignore
        getMyProfilePageAPI(userId).then((data: any) => {
            dispatch(setUsersProfile(data))
        })
    }
}


export default profileReducer