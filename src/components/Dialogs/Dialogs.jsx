import React from "react";
import s from './Dialogs.module.css' // модульный файл css
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props) => {  /*
    пришли:
        state: весь
        2 колбек функции для передачи экшенов
 */

    let userDialogsElements = props.state.dialogsPage.dialogs.map ( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    let userMessagesElements = props.state.dialogsPage.messages.map ( m => <Message message={m.message}/> );
    let newMessageTextValue = props.state.dialogsPage.newMessageTextDialogs

    /*
        добавление сообщения в сообщениях диалогов
    */
    let addNewMessageButtonClick = () => {
        props.newMessageDialogsCallbackProps();
    }
    let addNewMessageTextarea = (e) => {
        let newMessage = e.target.value;
        props.newMessageButtonClickCallbackProps(newMessage)
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {userDialogsElements} {/* отрисовываем диалоги */}
            </div>
            <div className={s.messages}>
                <div>{userMessagesElements}</div> {/* отрисовываем сами сообщения  */}
                <div>
                    {/*
                        добавление сообщения в сообщениях пользователей
                    */}
                    <div>
                        <textarea
                            placeholder={'Enter your message'}
                            value={newMessageTextValue}
                            onChange={addNewMessageTextarea}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={addNewMessageButtonClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
