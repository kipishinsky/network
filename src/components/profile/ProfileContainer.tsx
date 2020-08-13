import React from 'react'
import Profile from './Profile'
import {
    getMyProfilePageThunkCreator,
    setStatusProfileThunkCreator,
    setUsersProfileCreator, updateStatusProfileThunkCreator
} from '../../redux/profile-reducer'
import {connect} from 'react-redux'
import {Redirect, withRouter} from 'react-router-dom'
import {withAuthRedirect} from '../hoc/WithAuthRedirect'
import {compose} from 'redux'

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
        profile: state.profilePage.profile,
        status: state.profilePage.status
    }
}

class ProfileContainer extends React.Component <any> {

    componentDidMount() {
        let userId = this.props.match.params.userId
        if (!userId) {
            userId = 7385 //7385
        }
        // @ts-ignore
        this.props.getMyProfilePageThunkCreator(userId)
        this.props.setStatusProfileThunkCreator(userId)
    }

    render() {
        if (!this.props.isAuth) {
            return <Redirect to={'/login'}/>
        }

        return (
            <div>
                <Profile {...this.props}
                         profile={this.props.profile}
                         status={this.props.status}
                         updateStatus={this.props.updateStatusProfileThunkCreator}
                />
            </div>
        )
    }
}


// @ts-ignore
/*compose(
    connect(mapStateToProps, {setUsersProfile, getMyProfilePageThunkCreator}),
    withRouter,
    withAuthRedirect
)(ProfileContainer)*/

let AuthRedirectComponent = withAuthRedirect(ProfileContainer)

let withURLDataContainerComponent = withRouter(AuthRedirectComponent)

export default connect(mapStateToProps, {
    setUsersProfileCreator,
    getMyProfilePageThunkCreator,
    setStatusProfileThunkCreator,
    updateStatusProfileThunkCreator
})(withURLDataContainerComponent)
