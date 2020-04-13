import React from "react";
import s from './Dialogs.module.css'
import {NavLink} from "react-router-dom";


const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog + " " + s.active}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
};

const Message = (props) => {
    return (
        <div className={s.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {

    let dialogs = [
        {id: 1, name : "Anton"},
        {id: 2, name : "Sveta"},
        {id: 3, name : "Katya"},
        {id: 4, name : "Ira"},
        {id: 5, name : "Dima"}
    ];

    let messages = [
        {id: 1, message : "Hi"},
        {id: 2, message : "How is your"},
        {id: 3, message : "YO"},
        {id: 4, message : "Blya"},
        {id: 5, message : "Pizdec"}
    ];

    let dialogsElements = dialogs.map ( d => <DialogItem name={d.name} id={d.id}/> );
    let messagesElements = messages.map ( m => <Message message={m.message}/> );

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
}
export default Dialogs;
