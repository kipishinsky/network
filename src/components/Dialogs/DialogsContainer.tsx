import React from 'react';
import {pushNewMessageButtonCreator} from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs'
import {connect} from 'react-redux'
import {withAuthRedirect} from '../hoc/WithAuthRedirect'
import {compose} from 'redux'


const mapStateToProps = (state: any) => {

    return {
        dialogsPage: state.dialogsPage,
    }
}

const mapDispatchToProps = (dispatch: any): any => {

    return {
        pushNewMessageButtonClickCallbackProps: (newValueText: any) => {
            dispatch(pushNewMessageButtonCreator(newValueText))
        }
    }
}


// @ts-ignore
/*compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs)*/


let AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent); /*
вызываем connect(), connect возвращает функцию которая в ней сидит и вторыми () мы вызываем функцию,
 которая сидит в коннекте
 */
export default DialogsContainer;
