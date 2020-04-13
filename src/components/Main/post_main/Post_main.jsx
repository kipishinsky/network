import React from "react";
import s from './Post_main.module.css';
import Post_block from "./post_block/Post_block";

const Post_main = (props) => {

    let posts = [
        {id: 1, message : "Hi", likesCount: 15},
        {id: 2, message : "Hi, how are you?", likesCount: 3},
        {id: 3, message : "idi nahuy", likesCount: 24},
        {id: 4, message : "Blya", likesCount: 10},
        {id: 5, message : "Pizdec", likesCount: 5}
    ];

    let postsElements = posts.map ( p => <Post_block message = {p.message} likesCount = {p.likesCount}/>);

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
                    {postsElements}
                </div>
        </div>
    )
}
export default Post_main;
