import React from "react";
import s from './Dialogs.module.css' // модульный файл css
import DialogItem from "./dialogItem/DialogItem";
import Message from "./message/Message";


/*в 22 уроке сделали роутинг на проваливание в индивидуальные мессенджи, добавили в путь
роутинга еще цифры для каждого диалога, в дальнейшем переделает это все дело в мап
и будет песня*/

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
