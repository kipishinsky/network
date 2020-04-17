import cat from '../Image/cat.jpg'

let state = {
    profilePage: {
        posts: [
            {id: 1, message: "Hi", likesCount: 15},
            {id: 2, message: "Hi, how are you?", likesCount: 3},
            {id: 3, message: "idi nahuy", likesCount: 24},
            {id: 4, message: "Blya", likesCount: 10},
            {id: 5, message: "Pizdec", likesCount: 5}
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
export default state;