import React from "react";
import pstBlock from './Post.module.css';
import Like from './like/Like'
import cat from "../image/cat.jpg";

const Post = (props: any) => {
    return (
        <div className={pstBlock.post_main}>
            <div className={pstBlock.item}>
                <div>
                    <img src="/src/image/Spinner.gif" alt="Cat" />
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
