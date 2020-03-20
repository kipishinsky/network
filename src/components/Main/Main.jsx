import React from "react";
import w from './Main.module.css'
import Post_main from './post_main/Post_main'

const Main = () => {

  return (
      <div>
          <div className={w.content}>
                <img src="https://futurereport.schibsted.com/wp-content/uploads/2016/10/BIG-BRAIN_2.jpg"/>
          </div>
          <div>
                ava + dicription
          </div>
          <Post_main />

      </div>
    );
}

export default Main;
