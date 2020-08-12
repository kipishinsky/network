import React from 'react'
import Profile from './Profile'
import {getMyProfilePageThunkCreator, setUsersProfile} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../../hoc/WithAuthRedirect'

export type profileResponseDataType = {
    aboutMe: string,
    contacts: any,
    fullName: string,
    lookingForJob: boolean,
    lookingForAJobDescription: string,
    photos: any,
    userId: number
}

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile
    }
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


let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let withURLDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {setUsersProfile, getMyProfilePageThunkCreator})(withURLDataContainerComponent)
