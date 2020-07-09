const PUSH_NEW_POST_PROFILE = 'PUSH_NEW_POST_PROFILE';
const ADD_NEW_VALUE_TEXT = 'ADD_NEW_VALUE_TEXT';

let initialState = {
    posts: [
        {id: 1, message: "Hi", likesCount: 15},
        {id: 2, message: "Hi, how are you?", likesCount: 3},
        {id: 3, message: "How do you usually spend your free time?", likesCount: 24},
        {id: 4, message: "I'm visiting my granny this weekend", likesCount: 10},
        {id: 5, message: "Frontend is more visual than backend", likesCount: 5}
    ],
    newPostText: "enter text..."
}

const profileReducer = (state = initialState, action) => {
    switch (action.type) {
        case PUSH_NEW_POST_PROFILE:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            let stateCopyPush = {...state};
            stateCopyPush.posts = [...state.posts];
            stateCopyPush.posts.push(newPost);
            stateCopyPush.newPostText = '';
            return stateCopyPush;
        case ADD_NEW_VALUE_TEXT:
            let stateCopyValue = {...state}
            stateCopyValue.newPostText = action.newText;
            return stateCopyValue;
        default:
            return state;
    }
}

export default profileReducer;
export const pushNewPostProfileCreator = () => ({type: PUSH_NEW_POST_PROFILE})
export const addNewValueProfileCreator = (text) => ({type: ADD_NEW_VALUE_TEXT, newText: text})
