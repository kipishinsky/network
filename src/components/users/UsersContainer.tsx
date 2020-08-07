import React from 'react';
import {connect} from 'react-redux';
import * as axios from 'axios';
import {
    follow, getUsersThunkCreator,
    setCurrentPage,
    setIsFetching, setStateStickyButton,
    setTotalUsersCount,
    setUsers,
    unfollow
} from '../../redux/users_reducer';
import Users from './Users';
import Preloader from '../preloader/Preloader';
import {getUsers, usersAPI} from '../../api/Api';

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
        /*this.props.setIsFetching(true)
        // @ts-ignore
        getUsers(this.props.currentPage, this.props.pageSize).then(data => {

            this.props.setUsers(data.items)
            this.props.setTotalUsersCount(data.totalCount)
            this.props.setIsFetching(false)
        });*/
    }

    pageChanged = (page: any) => {
        this.props.setIsFetching(true);
        this.props.setCurrentPage(page);
        // @ts-ignore
        getUsers(page, this.props.pageSize).then(data => {
            this.props.setUsers(data.items);
            this.props.setIsFetching(false);
        });
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
                    follow={this.props.follow}
                    unfollow={this.props.unfollow}
                    followingInProgress={this.props.followingInProgress}
                    setStateStickyButton={this.props.setStateStickyButton}
                />
            </div>
        );
    }
}

export default connect(mapStateToProps, {
    follow,
    unfollow,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    setIsFetching,
    setStateStickyButton,
    getUsersThunkCreator
})(UsersContainer);