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
              dispatch = {props.dispatch}
              newPostText = {props.state.newPostText}
          />
      </div>
    );
}

export default Profile;
