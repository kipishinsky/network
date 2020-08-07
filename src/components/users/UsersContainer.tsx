import React from 'react';
import {connect} from 'react-redux';
import {
    follow,
    unfollow,
    getUsersThunkCreator,
    setCurrentPage,
    setStateStickyButton, followThunkCreator, unfollowThunkCreator,
} from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../preloader/Preloader';

let mapStateToProps = (state: any) => {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    };
};

class UsersContainer extends React.Component <any> {

    componentDidMount() {
        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);
    }

    pageChanged = (page: any) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize);
    };

    render() {
        return (
            <div>
                {this.props.isFetching ? <Preloader/> : null}
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    pageChanged={this.pageChanged}
                    users={this.props.users}
                    followThunkCreator={this.props.followThunkCreator}
                    unfollowThunkCreator={this.props.unfollowThunkCreator}
                    followingInProgress={this.props.followingInProgress}

                />
            </div>
        );
    }
}

export default connect(mapStateToProps, {
    followThunkCreator,
    unfollowThunkCreator,
    setCurrentPage,
    setStateStickyButton,
    getUsersThunkCreator
})(UsersContainer);