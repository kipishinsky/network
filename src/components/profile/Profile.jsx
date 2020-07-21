import React from "react";
import ProfileInfo from "./profileInfo/ProfileInfo";
import MyPostsContainer from "./posts/myPostsContainer";

const Profile = () => {
    return (
        <div>
            <ProfileInfo/>
            <MyPostsContainer/>
        </div>
    );
}

export default Profile;


/*
    <ProfileInfo/>
    <MyPostsContainer
        store={props.store}
    />
*/