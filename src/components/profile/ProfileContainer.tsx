import React from "react";
import Profile from "./Profile";
import * as axios from "axios";
import {setUsersProfile} from "../../redux/profile-reducer";
import {connect} from "react-redux";
import {withRouter} from "react-router-dom";

let mapStateToProps = (state: any) => {
    return {
        profile: state.profilePage.profile
    }
}

class ProfileContainer extends React.Component <any>{

    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 2;
        }
        // @ts-ignore
        axios.get(`https://social-network.samuraijs.com/api/1.0/profile/` + userId)
            .then((response: { data: any; }) => {
                this.props.setUsersProfile(response.data)
        });
    }

    render () {
        return (
            <div>
                <Profile {...this.props} profile={this.props.profile}/>
            </div>
        );
    }
}


let withURLDataContainerComponent = withRouter(ProfileContainer);


export default connect (mapStateToProps, {setUsersProfile}) (withURLDataContainerComponent);
