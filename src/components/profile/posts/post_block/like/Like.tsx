import React from 'react'
import l from './Like.module.css'

const Like = (props: any) => {

    return (
        <div className={l.colorlike}>
            <div>
                <span> {props.likesCount} like</span>
            </div>
        </div>
    )
}

export default Like
