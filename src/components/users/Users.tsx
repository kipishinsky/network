import React from 'react'
import styles from './users.module.css'
import userPhoto from '../../image/user_ava.jpg'
import {NavLink, Redirect} from 'react-router-dom'


let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            <div>
                {pages.map(p => {
                    return (
                        <span
                            // @ts-ignore
                            className={props.currentPage === p && styles.selectedPage}
                            onClick={() => {
                                props.pageChanged(p)
                            }}
                        >{p}</span>)
                })}
            </div>


            {props.users.map((u: { id: string | number | undefined; followed: any; name: React.ReactNode; status: React.ReactNode; }) =>

                <div key={u.id}>
                        <span>
                            <div>
                                <NavLink to={'./profile/' + u.id}>
                                    <img src={userPhoto} className={styles.userPhoto}/>
                                </NavLink>
                                </div>
                            <div>

                                {u.followed
                                    ?
                                    <button
                                        // @ts-ignore
                                        disabled={props.followingInProgress.some(id => u.id === u.id)}
                                        onClick={() => {
                                            props.unfollowThunkCreator(u.id)
                                        }}

                                    >unfollow</button>
                                    :
                                    <button
                                        // @ts-ignore
                                        disabled={props.followingInProgress.some(id => u.id === u.id)}
                                        onClick={() => {
                                            props.followThunkCreator(u.id)
                                        }}

                                    >follow</button>
                                }
                            </div>
                        </span>

                    <span>
                            <div>
                                {u.name}
                            </div>
                            <div>
                                {u.status}
                            </div>
                        </span>

                    <span>
                            <div>
                                {'u.location.country'}
                            </div>
                            <div>
                                {'u.location.city'}
                            </div>
                        </span>

                </div>
            )}

        </div>
    )
}

export default Users