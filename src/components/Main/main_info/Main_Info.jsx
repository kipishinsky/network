import React from "react";
import s from './Main_Info.module.css'

const Main_Info = () => {

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

export default Main_Info;
