import React from "react";
import s from './Dialogs.module.css' // модульный файл css
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";

/*в 25 уроке рефакторим диалоги, сообщения и посты уже как раз через map
в 25 видосе подробно объясняется как работает map

в дальнейшем данные будут приходить уже из стейта, а компоненты будут тупыми
 */

const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map ( d => <DialogItem name={d.name} id={d.id} img={d.img}/> );
    let messagesElements = props.state.messages.map ( m => <Message message={m.message}/> );

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
};

export default Dialogs;
