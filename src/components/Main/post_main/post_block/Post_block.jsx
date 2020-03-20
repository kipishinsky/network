import React from "react";
import pstblock from './Post_block.module.css';
import Like from './like/Like'

const Post_block = (props) => {

    return (
        <div className={pstblock.post_main}>
            <div className={pstblock.item}>
                <div>
                    <img src="https://www.elsetge.cat/myimg/f/31-317081_server-farm-wallpaper-google-server-rooms-usa.jpg"/>
                </div>

                <div>
                    Post 1
                    {props.message}
                </div>

            </div>
            <Like kolvolike = {'30 '}/>

         </div>

     );
}

export default Post_block;
