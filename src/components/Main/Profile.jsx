import React from "react";
import w from './Profile.module.css'
import Posts from './posts/Posts'
import ProfileInfo from "./profileInfo/ProfileInfo";
import {updateNewPostText} from "../../redux/State";



const Profile = (props) => {
  return (
      <div>
          <ProfileInfo  />
          debugger
          <Posts
              state = {props.state.posts}
              addPost = {props.addPost}
              newPostText = {props.state.newPostText}
              updateNewPostText = {props.updateNewPostText}
          />
      </div>
    );
}

export default Profile;
