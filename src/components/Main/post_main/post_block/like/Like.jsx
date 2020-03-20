import React from "react";
import likeblock from './Like.module.css';

const Like = (props) => {

    return (
        <div className={likeblock}>

            <div>
                {props.kolvolike} <span>like</span>
            </div>

         </div>

     );
}

export default Like;
