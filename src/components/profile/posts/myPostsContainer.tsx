import React from 'react'
import {pushNewPostProfileCreator, addNewValueProfileCreator} from '../../../redux/profile-reducer'
import Posts from './Posts'
import {connect} from 'react-redux'

const mapStateToProps = (state: any) => {

    return {
        posts: state.profilePage.posts,
        newPostText: state.profilePage.newPostText
    }
}

const mapDispatchToProps = (dispatch: any) => {

    return {
        pushNewPostWall: () => {
            dispatch(pushNewPostProfileCreator())
        },
        addNewValueInput: (newText: any) => {
            let action = addNewValueProfileCreator(newText);
            dispatch(action);
        }
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts) /*
вызываем connect(), connect возвращает функцию которая в ней сидит и вторыми () мы вызываем функцию,
 которая сидит в коннекте
 */

export default MyPostsContainer
