import cat from '../Image/cat.jpg'

const PUSH_NEW_MESSAGE_BUTTON = 'PUSH_NEW_MESSAGE_BUTTON'


type dialogsType = {
    id: number,
    name: string,
    img: string
}

interface dialogsMessagesType {
    id: number,
    message: string,
}

type dialogsStateType = {
    dialogs: Array<dialogsType>,
    messages: Array<dialogsMessagesType>
}

let initialState: dialogsStateType = {
    dialogs: [
        {id: 1, name: 'Anton', img: cat},
        {id: 2, name: 'Sveta', img: cat},
        {id: 3, name: 'Katya', img: cat},
        {id: 4, name: 'Ira', img: cat},
        {id: 5, name: 'Dima', img: cat}
    ],
    messages: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How is your'},
        {id: 3, message: 'What are your interests/hobbies?'},
        {id: 4, message: 'I am meeting my friends in the evening'},
        {id: 5, message: 'I like to create web-sites'}
    ]
}


type addNewValueTextACType = {
    type: 'ADD_NEW_VALUE_TEXT_DIALOGS',
    newMessageDialogs: string
}

type pushNewMessageACType = {
    type: 'PUSH_NEW_MESSAGE_BUTTON',
    newValueText: string
}

type ActionType =
    addNewValueTextACType | pushNewMessageACType;


const dialogsReducer = (state = initialState, action: ActionType) => {

    switch (action.type) {
        case PUSH_NEW_MESSAGE_BUTTON:
            let newMessage = action.newValueText
            return {
                ...state,
                messages: [...state.messages, {id: 6, message: newMessage}]
            }
        default:
            return state
    }
}

export default dialogsReducer

export const pushNewMessageButtonCreator = (newValueText: any) => ({type: PUSH_NEW_MESSAGE_BUTTON, newValueText})


