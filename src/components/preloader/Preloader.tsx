import React from 'react'
import loaderUsers from '../../Image/loaderUsers.svg'

const Preloader = () => {
    return (
        <div>
            <img src={loaderUsers} alt="Loading"/>
        </div>
    )
}

export default Preloader