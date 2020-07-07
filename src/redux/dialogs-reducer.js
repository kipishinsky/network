const UPDATE_NEW_MESSAGE_TEXT_DIALOGS = 'UPDATE_NEW_MESSAGE_TEXT_DIALOGS';
const SEND_MESSAGE = 'SEND_MESSAGE'

const dialogsReducer = (state, action) => {
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