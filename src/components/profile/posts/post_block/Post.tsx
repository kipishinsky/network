import React from "react";
import pstBlock from './Post.module.css';
import Like from './like/Like'

const Post = (props: any) => {
    return (
        <div className={pstBlock.post_main}>
            <div className={pstBlock.item}>
                <div>
                    <img src="https://www.elsetge.cat/myimg/f/31-317081_server-farm-wallpaper-google-server-rooms-usa.jpg" />
                </div>
                <div>
                    Post 1 <br/>
                    {props.message}
                </div>
                <Like likesCount = {props.likesCount}/>
            </div>


         </div>

     );
}

export default Post;
