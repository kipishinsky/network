import React from "react";
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {sendMessageCreator, updateNewMessageTextDialogsCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => {

    debugger
    let state = props.state.dialogsPage

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (newMessage) => {
        props.store.dispatch(updateNewMessageTextDialogsCreator(newMessage))
    }

    return (
        <Dialogs
            updateNewMessageChange={onNewMessageChange}
            sendMessage={onSendMessageClick}
            dialogsPage={state}
        />)
};

export default DialogsContainer;
