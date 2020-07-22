import React from "react";
import s from './ProfileInfo.module.css'
import Preloader from "../../preloader/Preloader";

const ProfileInfo = (props: any) => {
    if(!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div className={s.content}>
                <img src="https://futurereport.schibsted.com/wp-content/uploads/2016/10/BIG-BRAIN_2.jpg"/>
            </div>
            <div className={s.descriptionBlock}>
                <img src={props.profile.photos.large}/>
                <div>
                    {props.profile.fullName}
                </div>
                <div>
                    {props.profile.aboutMe}
                </div>
                <div>
                    {props.profile.lookingForAJobDescription}
                </div>
            </div>
        </div>
    );
}

export default ProfileInfo;
