import React from 'react'
import loaderUsers from '../../image/loaderUsers.svg'

const Preloader = () => {
    return (
        <div>
            <img src={loaderUsers} alt="Loading"/>
        </div>
    )
}

export default Preloader