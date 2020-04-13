import React from "react";
import likeblock from './Like.module.css';

const Like = (props) => {

    return (
        <div className={likeblock}>

            <div>
                <span> {props.likesCount}30 like</span>
            </div>

         </div>

     );
}

export default Like;
