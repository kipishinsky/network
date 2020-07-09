import React from "react";
import {pushNewMessageButtonCreator, addNewValueTextDialogsCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state) => {

    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch) => {

    return {
        addNewValueTextDialogsCallbackProps: (newMessage) => {
            dispatch(addNewValueTextDialogsCreator(newMessage))
        },
        pushNewMessageButtonClickCallbackProps: () => {
            dispatch(pushNewMessageButtonCreator())
        }
    }
}

const DialogsContainer = connect(mapStateToProps,mapDispatchToProps)(Dialogs); /*
вызываем connect(), connect возвращает функцию которая в ней сидит и вторыми () мы вызываем функцию,
 которая сидит в коннекте
 */
export default DialogsContainer;

/*

const DialogsContainer = (props) => {
    пришли state и store


let pushNewMessageButtonClickCallback = () => {
        отправляем в редьюсеры диспатчи с экшинами

    props.store.dispatch(pushNewMessageButtonCreator())
         передаем функцию (dispatch(action) - Отправляет экшен. Это единственный способ изменить состояние.
         Функция редюсера стора будет вызвана с текущим результатом getState() и переданным
         dispatch (action) синхронно. Возвращенное значения будет содержать следующие состояние.
         Оно будет возвращено из getState() сразу же и подписчики будут немедленно уведомлены.)


}
let addNewValueTextDialogsCallback = (newMessage) => {
        отправляем в редьюсеры диспатчи с экшинами

    props.store.dispatch(addNewValueTextDialogsCreator(newMessage))
         передаем функцию (dispatch(action) - Отправляет экшен. Это единственный способ изменить состояние.
         Функция редюсера стора будет вызвана с текущим результатом getState() и переданным
         dispatch (action) синхронно. Возвращенное значения будет содержать следующие состояние.
         Оно будет возвращено из getState() сразу же и подписчики будут немедленно уведомлены.)


}
return (
    <Dialogs
        addNewValueTextDialogsCallbackProps={addNewValueTextDialogsCallback}
        pushNewMessageButtonClickCallbackProps={pushNewMessageButtonClickCallback}
        state={props.state}
    />)


};

export default DialogsContainer;



*/