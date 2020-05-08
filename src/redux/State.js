import cat from '../Image/cat.jpg'
import {rerenderEntireTree} from "../render";

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi", likesCount: 15},
            {id: 2, message: "Hi, how are you?", likesCount: 3},
            {id: 3, message: "Hahaha", likesCount: 24},
            {id: 4, message: "MOREMOREMORE", likesCount: 10},
            {id: 5, message: "SHklaw2kasj", likesCount: 5}
        ]
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
};

export let addPost = (postMessage) => {
    debugger
    let newPost = {
        id: 6,
        message: postMessage,
        likesCount: 0
    };
    state.profilePage.posts.push(newPost);
    rerenderEntireTree(state);
};

export default state;