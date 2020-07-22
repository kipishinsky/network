
// собственный редакс

import cat from '../image/cat.jpg'
/*
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
*/

let store = <any> {

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
            ],
            newMessageTextDialogs: ''
        },
        sidebar: {}
    },

    _callSubscriber () {
        console.log ('state changed');
    },

    getState () {
        return this._state;
    },

    subscribe (observer: any) {
        this._callSubscriber = observer;
    },
    // @ts-ignore
    dispatch (action: any) { // action - это объект { type: 'ADD-POST'}
        // @ts-ignore
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        // @ts-ignore
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        // @ts-ignore
        this._state.sidebar = sidebarReducer(this._state.sidebar, action);
        this._callSubscriber(this._state);
    }

};

export default store;

