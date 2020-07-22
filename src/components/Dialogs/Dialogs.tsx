import React from "react";
import s from './Dialogs.module.css' // модульный файл css
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


const Dialogs = (props: any) => {

    let userDialogsElements = props.dialogsPage.dialogs.map ( (d: { name: any; id: any; img: any; }) => <DialogItem name={d.name} key={d.id} id={d.id} img={d.img}/> );
    let userMessagesElements = props.dialogsPage.messages.map ( (m: { id: any; message: any; }) => <Message key={m.id} message={m.message}/> );
    let newMessageTextValue = props.dialogsPage.newMessageTextDialogs

    /*
        добавление сообщения в сообщениях диалогов
    */

    let addNewValueMessageTextarea = (e: any) => {
        let newMessageValue = e.target.value;
        props.addNewValueTextDialogsCallbackProps(newMessageValue)
    }
    let pushNewMessageButtonClick = () => {
        props.pushNewMessageButtonClickCallbackProps();
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
                            onChange={addNewValueMessageTextarea}>
                        </textarea>
                    </div>
                    <div>
                        <button onClick={pushNewMessageButtonClick}>
                            Send
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;
