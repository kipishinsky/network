import React from "react";
import s from './PostInfo.css';
import Post from "./post_block/Post";

const Posts = (props) => {

    let postsElements = props.state.map ( p => <Post message = {p.message} likesCount = {p.likesCount}/>);

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
export default Posts;
