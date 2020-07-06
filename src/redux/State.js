import cat from '../Image/cat.jpg'


const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';


let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 15},
                {id: 2, message: "Hi, how are you?", likesCount: 3},
                {id: 3, message: "How do you usually spend your free time?", likesCount: 24},
                {id: 4, message: "I'm visiting my granny this weekend", likesCount: 10},
                {id: 5, message: "Frontend is more visual than backend", likesCount: 5}
            ],
            newPostText: "enter text..."
        },
        dialogsPage: {
            dialogs: [
                {id: 1, name: "Anton", img: cat},
                {id: 2, name: "Sveta", img: cat},
                {id: 3, name: "Katya", img: cat},
                {id: 4, name: "Ira", img: cat},
                {id: 5, name: "Dima", img: cat}
            ],
            messages: [
                {id: 1, message: "Hi"},
                {id: 2, message: "How is your"},
                {id: 3, message: "What are your interests/hobbies?"},
                {id: 4, message: "I am meeting my friends in the evening"},
                {id: 5, message: "I like to create web-sites"}
            ]
        }
    },
    _callSubscriber () {
        console.log ('state changed');
    },

    getState () {
        return this._state;
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    },

    dispatch (action) { // action - это объект { type: 'ADD-POST'}
        if (action.type === 'ADD-POST') {
            let newPost = {
                id: 6,
                message: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.posts.push(newPost);
            this._state.profilePage.newPostText = '';
            this._callSubscriber(this._state);
        } else if (action.type === 'UPDATE-NEW-POST-TEXT') {
            this._state.profilePage.newPostText = action.newText;
            this._callSubscriber(this._state);
        }
    }

};

export const addPostActionCreator = () => ({type: ADD_POST})
export const updateNewPostTextActionCreator = (text) => ({type: UPDATE_NEW_POST_TEXT, newText: text})

export default store;