import React from "react";
import {addPostCreator, updateNewPostTextCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const MyPostsContainer = (props) => {

    let state = props.store.getState();

    let newPostTextArea = () => {
        props.store.dispatch(addPostCreator());
    };

    let onPostChange = (text) => {
        let action = updateNewPostTextCreator(text);
        props.store.dispatch(action);
    };

    return (
        <Posts
            updateNewPostText={onPostChange}
            newPostTextArea={newPostTextArea}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />
    )
};
export default MyPostsContainer;
