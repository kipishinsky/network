import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPostsContainer from './posts/myPostsContainer'

const Profile = (props: any) => {
    return (
        <div>
            <ProfileInfo profile={props.profile}/>
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
