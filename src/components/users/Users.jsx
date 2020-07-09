import React from 'react';
import styles from './users.module.css';

let Users = (props) => {

    return (
        <div>
            { props.users.map ( u =>
                    <div key={u.id}>
                        <span>
                            <div>
                                <img src={u.photo} className={styles.userPhoto} />
                            </div>
                            <div>
                                {u.followed
                                    ? <button onClick={ () => {props.unfollow (u.id)}}>unfollow</button>
                                    : <button onClick={ () => {props.follow (u.id)}}>follow</button>}
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
                                {u.location.country}
                            </div>
                            <div>
                                {u.location.city}
                            </div>
                        </span>

                    </div>)
            }
        </div>
    )
}

export default Users;