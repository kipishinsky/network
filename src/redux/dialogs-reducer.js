import cat from "../image/cat.jpg";

const ADD_NEW_VALUE_TEXT_DIALOGS = 'ADD_NEW_VALUE_TEXT_DIALOGS';
const PUSH_NEW_MESSAGE_BUTTON = 'PUSH_NEW_MESSAGE_BUTTON';

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
};

debugger

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NEW_VALUE_TEXT_DIALOGS:
            state.newMessageTextDialogs = action.newMessageDialogs;
            return state;
        case PUSH_NEW_MESSAGE_BUTTON:
            let newMessage = state.newMessageTextDialogs;
            state.newMessageTextDialogs = '';
            state.messages.push({id: 6, message: newMessage});
            return state;
        default:
            return state;
    }
};

export default dialogsReducer;

export const addNewValueTextDialogsCreator = (newMess) => ({type: ADD_NEW_VALUE_TEXT_DIALOGS, newMessageDialogs: newMess});
export const pushNewMessageButtonCreator = () => ({type: PUSH_NEW_MESSAGE_BUTTON});


