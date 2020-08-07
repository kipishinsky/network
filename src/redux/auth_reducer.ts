import {getMyAccountPage} from '../api/Api'


const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    id: null,
    email: null,
    login: null,
    isAuth: false
}

const authReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data,
                isAuth: true
            }
        default:
            return state;
    }
}

export const setAuthUserData = (id: any, email: any, login: any) => ({type: SET_USER_DATA, data: {id, email, login}})

export const getMyAccountPageThunkCreator = () => {
    return (dispatch: any) => {
        getMyAccountPage().then( (data:any) => {
            if (data.resultCode === 0) {
                let {id, email, login} = data.data
                // @ts-ignore
                dispatch(setAuthUserData(id, email, login))
            }
        })
    }
}


export default authReducer;


