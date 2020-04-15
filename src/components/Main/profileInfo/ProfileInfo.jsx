import React from "react";
import s from './ProfileInfo.module.css'

const ProfileInfo = () => {

  return (
      <div>
          <div className={s.content}>
                <img src="https://futurereport.schibsted.com/wp-content/uploads/2016/10/BIG-BRAIN_2.jpg"/>
          </div>
          <div className={s.descriptionBlock}>
                ava + dicription
          </div>
      </div>
    );
}

export default ProfileInfo;
