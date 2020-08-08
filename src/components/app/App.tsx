import React from 'react'
import Navbar from '../navbar/Navbar'
import ProfileContainer from '../profile/ProfileContainer'
import UsersContainer from '../users/UsersContainer'
import DialogsContainer from '../dialogs/DialogsContainer'
import './App.css'
import {Route} from 'react-router-dom'
import HeaderContainer from '../header/HeaderContainer'
import Login from '../login/Login'


const App = () => {
    return (
        <div className={'app-wrapper'}>
            <HeaderContainer/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route
                    path={'/profile/:userId?'}
                    render={() => <ProfileContainer/>}
                />
                <Route
                    path={'/dialogs'}
                    render={() => <DialogsContainer/>}
                />
                <Route
                    path={'/users'}
                    render={() => <UsersContainer/>}
                />
                <Route
                    path={'/login'}
                    render={() => <Login />}
                />
            </div>
        </div>
    )
}

export default App
