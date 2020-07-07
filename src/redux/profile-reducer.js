const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';

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
        case ADD_POST:
            let newPost = {
                id: 6,
                message: state.newPostText,
                likesCount: 0
            };
            state.posts.push(newPost);
            state.newPostText = '';
            return state;
        case UPDATE_NEW_POST_TEXT:
            state.newPostText = action.newText;
            return state;
        default:
            return state;
    }
}

export default profileReducer;
export const addPostCreator = () => ({type: ADD_POST})
export const updateNewPostTextCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})
