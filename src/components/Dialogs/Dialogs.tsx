import React from 'react'
import s from './Dialogs.module.css' // модульный файл css
import DialogItem from './dialogItem/DialogItem'
import Message from './message/Message'
import { Redirect } from 'react-router-dom'
import {Field, reduxForm} from 'redux-form'



const Dialogs = (props: any) => {

    let userDialogsElements = props.dialogsPage.dialogs.map((d: { name: any; id: any; img: any; }) => <DialogItem
        name={d.name} key={d.id} id={d.id} img={d.img}/>)
    let userMessagesElements = props.dialogsPage.messages.map((m: { id: any; message: any; }) => <Message key={m.id} message={m.message}/>)

    let onDialogsSubmit = (value: any) => {
        props.pushNewMessageButtonClickCallbackProps(value.newValueText)
    }

    if (!props.isAuth) {
        return <Redirect to={'/login'}/>
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {userDialogsElements}
            </div>
            <div className={s.messages}>
                <div>{userMessagesElements}</div>
                <DialogsReduxForm
                    // @ts-ignore
                    onSumbit={onDialogsSubmit}/>
            </div>
        </div>
    )
}

const DialogsForm = (props: any) => {

    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field
                    component={'textarea'}
                    name={'newMessageText'}
                    placeholder={'Enter your message'}/>
            </div>
            <div>
                <button type="submit">Send</button>
            </div>
        </form>
    )
}

const DialogsReduxForm = reduxForm({form: 'dialogsMessage'})(DialogsForm)

export default Dialogs
