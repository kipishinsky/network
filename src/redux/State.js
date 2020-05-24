import cat from '../Image/cat.jpg'
import {unstable_renderSubtreeIntoContainer} from "react-dom";

let store = {
    _state: {
        profilePage: {
            posts: [
                {id: 1, message: "Hi", likesCount: 15},
                {id: 2, message: "Hi, how are you?", likesCount: 3},
                {id: 3, message: "Hahaha", likesCount: 24},
                {id: 4, message: "MOREMOREMORE", likesCount: 10},
                {id: 5, message: "SHklaw2kasj", likesCount: 5}
            ],
            newPostText: "kamasutra"
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
                {id: 3, message: "YO"},
                {id: 4, message: "Blya"},
                {id: 5, message: "Pizdec"}
            ]
        }
    },
    getState () {
        debugger
        return this._state;
    },
    _callSubscriber () {
        console.log ('state changed');
    },
    addPost () {
        let newPost = {
            id: 6,
            message: this._state.profilePage.newPostText,
            likesCount: 0
        };
        this._state.profilePage.posts.push(newPost);
        this._state.profilePage.newPostText = '';
        this._callSubscriber(this._state);
    },
    updateNewPostText (newText) {
        store._state.profilePage.newPostText = newText;
        this._callSubscriber(this._state);
    },
    subscribe (observer) {
        this._callSubscriber = observer;
    }
};

export default store;