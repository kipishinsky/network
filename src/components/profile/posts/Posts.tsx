import React from "react";
// @ts-ignore
import s from './PostInfo.css';
import Post from "./post_block/Post";


const Posts = (props: any) => {

    let postsElements = props.posts.map((p: { id: any; message: any; likesCount: any; }) => <Post key={p.id} message={p.message} likesCount={p.likesCount}/>)
    let newInputValueREF = React.createRef<any>();

    // добавить новый пост на стену
    let pushNewPostProfile = () => {
        props.pushNewPostWall()
    };
    let newValueInput = () => {
        let newText = newInputValueREF.current.value;
        props.addNewValueInput(newText)
    };


    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea
                        ref={newInputValueREF}
                        value={props.newPostText}
                        onChange={newValueInput}
                    />
                </div>
                <div>
                    <button onClick={pushNewPostProfile}>
                        add new post
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
};
export default Posts;
