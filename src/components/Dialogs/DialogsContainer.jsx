import React from "react";
import {sendMessageCreator, pushNewMessageTextDialogsCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";



const DialogsContainer = (props) => { /*
    пришли state и store
 */

    let newMessageButtonClickCallback = () => { /*
        отправляем в редьюсеры диспатчи с экшинами
    */
        props.store.dispatch(sendMessageCreator()) /*
         передаем функцию (dispatch(action) - Отправляет экшен. Это единственный способ изменить состояние.
         Функция редюсера стора будет вызвана с текущим результатом getState() и переданным
         dispatch (action) синхронно. Возвращенное значения будет содержать следующие состояние.
         Оно будет возвращено из getState() сразу же и подписчики будут немедленно уведомлены.)

                 */
    }
    let newMessageDialogsCallback = (newMessage) => { /*
        отправляем в редьюсеры диспатчи с экшинами
    */
        props.store.dispatch(pushNewMessageTextDialogsCreator(newMessage)) /*
         передаем функцию (dispatch(action) - Отправляет экшен. Это единственный способ изменить состояние.
         Функция редюсера стора будет вызвана с текущим результатом getState() и переданным
         dispatch (action) синхронно. Возвращенное значения будет содержать следующие состояние.
         Оно будет возвращено из getState() сразу же и подписчики будут немедленно уведомлены.)

                 */
    }
    return (
        <Dialogs
            newMessageDialogsCallbackProps={newMessageDialogsCallback}
            newMessageButtonClickCallbackProps={newMessageButtonClickCallback}
            state={props.state}
        />)
};

export default DialogsContainer;
