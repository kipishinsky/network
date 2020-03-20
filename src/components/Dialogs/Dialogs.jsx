import React from "react";
import s from './Dialogs.module.css'

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={s.dialog + " " + s.active}>
                    Anton
                </div>
                <div className={s.dialog}>
                    Alex
                </div>
                <div className={s.dialog}>
                    Brother
                </div>
                <div className={s.dialog}>
                    Sergey
                </div>
                <div className={s.dialog}>
                    HipHopClub
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>Hi</div>
                <div className={s.message}>Hiw is your</div>
                <div className={s.message}>YO</div>
            </div>
        </div>
    )
}
export default Dialogs;
