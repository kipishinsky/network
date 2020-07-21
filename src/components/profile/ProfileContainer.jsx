import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUsersProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }

}

class ProfileContainer extends React.Component {

    componentDidMount() {
        debugger
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/2`)
            .then(response => {
                this.props.setUsersProfile(response.data)
        });
        debugger
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}



export default connect (mapStateToProps, {setUsersProfile}) (ProfileContainer);
