import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../image/user_ava.jpg";
import {NavLink} from "react-router-dom";
import * as axios from "axios";

let Users = (props: any) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = [];
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
                        >{p}</span>)})}
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

                                    <button onClick={ () => {
                                        // @ts-ignore
                                        axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`,
                                            {withCredentials: true, headers: {"API-KEY": "b61c59bc-c21c-4a07-9ff4-5b299b2d5ced"}})
                                            // @ts-ignore
                                            .then(response => {
                                                if (response.data.resultCode === false) {props.unfollow(u.id)}
                                            })}}>unfollow</button>

                                    :

                                    <button onClick={ () => {
                                        // @ts-ignore
                                        axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {},
                                            {withCredentials: true, headers: {"API-KEY": "b61c59bc-c21c-4a07-9ff4-5b299b2d5ced"}})
                                            // @ts-ignore
                                            .then(response => {
                                                if (response.data.resultCode === false) {props.follow(u.id)}
                                            });}}>follow</button>
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

                </div>)
            }

        </div>
    )
}

export default Users;