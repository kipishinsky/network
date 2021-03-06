import React from 'react'
import ProfileInfo from './profileInfo/ProfileInfo'
import MyPostsContainer from './posts/myPostsContainer'
import {Redirect} from 'react-router-dom'

const Profile = (props: any) => {

    return (
        <div>
            <ProfileInfo
                profile={props.profile}
                status={props.status}
                updateStatus={props.updateStatusProfileThunkCreator}
            />
            <MyPostsContainer/>
        </div>
    )
}

export default Profile
