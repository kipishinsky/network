import React from 'react'
import Profile from './Profile'
import {getMyProfilePageThunkCreator, setUsersProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile,
        isAuth: state.auth.isAuth
    }
}

export type profileResponseDataType = {
    aboutMe: string,
    contacts: any,
    fullName: string,
    lookingForJob: boolean,
    lookingForAJobDescription: string,
    photos: any,
    userId: number
}

class ProfileContainer extends React.Component <any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 7385
        }
        // @ts-ignore
        this.props.getMyProfilePageThunkCreator(userId)
    }

    render() {

        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        )
    }
}

let withURLDataContainerComponent = withRouter(ProfileContainer)


export default connect(mapStateToProps, {setUsersProfile, getMyProfilePageThunkCreator})(withURLDataContainerComponent)
