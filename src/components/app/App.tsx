import React from 'react'
import ProfileContainer from '../profile/ProfileContainer'
import UsersContainer from '../users/UsersContainer'
import './App.css'
import {Route} from 'react-router-dom'
import Login from '../login/Login'
import HeaderContainer from "../Header/HeaderContainer";
import Navbar from "../Navbar/Navbar";
import DialogsContainer from "../Dialogs/DialogsContainer";


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
