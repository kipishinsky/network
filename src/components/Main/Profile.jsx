import React from "react";
import w from './Profile.module.css'
import Posts from './posts/Posts'
import ProfileInfo from "./profileInfo/ProfileInfo";



const Profile = (props) => {
  debugger;
  return (
      <div>
          <ProfileInfo  />
          <Posts state = {props.state.posts}/>
      </div>
    );
}

export default Profile;
