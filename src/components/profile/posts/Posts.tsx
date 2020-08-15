import React from 'react'
// @ts-ignore
import s from './PostInfo.css'
import Post from './post_block/Post'
import {Field, reduxForm} from 'redux-form'



const Posts = (props: any) => {

    let postsElements = props.posts.map(
        (p: { id: any; message: any; likesCount: any; img: any; }) => (
            <Post key={p.id}
                  message={p.message}
                  likesCount={p.likesCount}/>))

    const pushNewValuePost = (values: any) => {
        props.pushNewPostWall(values.newValueText)
    }

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <PostFormRedux onSubmit={pushNewValuePost}/>
            <div className={s.posts}>
                {postsElements}
            </div>
        </div>
    )
}

const PostsForm = (props: any) => {

    return (

        <form onSubmit={props.handleSubmit}>
            <div className={s.postsInput}>
                <Field name={'newValueText'} component={'textarea'}/>
            </div>
            <div className={s.btn}>
                <button>add new post</button>
                <button>remove post</button>
            </div>
        </form>
    )
}

const PostFormRedux = reduxForm({form: 'postMessageForm'})(PostsForm)


export default Posts
