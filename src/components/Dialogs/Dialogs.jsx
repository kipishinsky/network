import React from "react";
import s from './Dialogs.module.css' // модульный файл css
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";
import {sendMessageCreator, updateNewMessageTextDialogsCreator} from "../../redux/State";


const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage
    let store = props.store._state.dialogsPage

    let dialogsElements = store.dialogs.map ( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    let messagesElements = store.messages.map ( m => <Message message={m.message}/> );
    let newMessageTextDialogs = state.newMessageTextDialogs

    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator())
    }
    let onNewMessageChange = (e) => {
        let newMessage = e.target.value;
        props.store.dispatch(updateNewMessageTextDialogsCreator(newMessage))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>{messagesElements}</div>
                <div>
                    <div>
                        <textarea
                            placeholder={'Enter your message'}
                            value={newMessageTextDialogs}
                            onChange={onNewMessageChange}
                        >

                        </textarea>
                    </div>
                    <div>
                        <button
                            onClick={onSendMessageClick}
                        >
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
