import React from "react";
import './Post_main.module.css';
import Post_block from "./post_block/Post_block";

const Post_main = () => {
    return (
        <div>
                My post
                <div>
                    <textarea name="" id="" cols="30" rows="10">

                    </textarea>
                    <button>
                        add post
                    </button>
                    <button>
                        remove
                    </button>
                </div>
                <Post_block message = "Hi, how are you?"/>
                <Post_block message = "idi nahuy"/>
                <Post_block />
        </div>
    )
}
export default Post_main;
