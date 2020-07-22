import React from "react";
import {pushNewMessageButtonCreator, addNewValueTextDialogsCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";


const mapStateToProps = (state: any) => {

    return {
        dialogsPage: state.dialogsPage
    }
}

const mapDispatchToProps = (dispatch: any): any => {

    return {
        addNewValueTextDialogsCallbackProps: (newMessage: any) => {
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
