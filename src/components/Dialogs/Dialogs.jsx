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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Anton" id="1"/>
                <DialogItem name="Sveta" id="2"/>
                <DialogItem name="Katya" id="3"/>
                <DialogItem name="Ira" id="4"/>
                <DialogItem name="Dima" id="5"/>
            </div>
            <div className={s.messages}>
                <Message message="Hi"/>
                <Message message="Hiw is your"/>
                <Message message="YO"/>
            </div>
        </div>
    )
}
export default Dialogs;
