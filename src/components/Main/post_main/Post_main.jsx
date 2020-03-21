import React from "react";
import s from './Post_main.module.css';
import Post_block from "./post_block/Post_block";

const Post_main = (props) => {
    return (
        <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea name="" id="" cols="30" rows="10">

                        </textarea>
                    </div>
                    <div>
                        <button>
                            add post
                        </button>
                        <button>
                            remove
                        </button>
                    </div>
                </div>
                <div className={s.posts}>
                    <Post_block message = "Hi, how are you?"/>
                    <Post_block message = "idi nahuy"/>
                    <Post_block />
                </div>
        </div>
    )
}
export default Post_main;
