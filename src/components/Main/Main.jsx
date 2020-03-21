import React from "react";
import w from './Main.module.css'
import Post_main from './post_main/Post_main'
import Main_Info from "./main_info/Main_Info";


const Main = () => {

  return (
      <div>
          <Main_Info />
          <Post_main />
      </div>
    );
}

export default Main;
