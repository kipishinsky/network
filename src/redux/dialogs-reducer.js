import cat from "../image/cat.jpg";

const UPDATE_NEW_MESSAGE_TEXT_DIALOGS = 'UPDATE_NEW_MESSAGE_TEXT_DIALOGS';
const SEND_MESSAGE = 'SEND_MESSAGE'

let initialState = {
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
}

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_NEW_MESSAGE_TEXT_DIALOGS:
            state.newMessageTextDialogs = action.newMessageDialogs;
            return state;
        case SEND_MESSAGE:
            let newMessage = state.newMessageTextDialogs;
            state.newMessageTextDialogs = '';
            state.messages.push({id: 6, message: newMessage});
            return state;
        default:
            return state;
    }
}

export default dialogsReducer;

export const updateNewMessageTextDialogsCreator = (newMess) => ({type: UPDATE_NEW_MESSAGE_TEXT_DIALOGS, newMessageDialogs: newMess})
export const sendMessageCreator = () => ({type: SEND_MESSAGE})