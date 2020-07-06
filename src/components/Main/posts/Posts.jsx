import React from "react";
import s from './PostInfo.css';
import Post from "./post_block/Post";

const Posts = (props) => {

    let postsElements = props.state.map ( p => <Post message = {p.message} likesCount = {p.likesCount}/>);

    let newInputValue = React.createRef();

    let newPostTextArea = () => {
        //props.addPost()
        props.dispatch ({type: 'ADD-POST'});
    };

    let onPostChange = () => {
        let text = newInputValue.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    };


    return (

        <div className={s.postsBlock}>
                <h3>My post</h3>
                <div>
                    <div>
                        <textarea
                            ref = {newInputValue}
                            value={props.newPostText}
                            onChange={onPostChange}
                        />
                    </div>
                    <div>
                        <button onClick={newPostTextArea}>
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
};
export default Posts;
