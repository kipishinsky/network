import React from 'react';
import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsContainer from "./components/dialogs/DialogsContainer";
import {Route} from "react-router-dom"
import './App.css';

const App = () => {
    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                <Route
                    exact path={'/profile'}
                    render={ () => <Profile/> }
                />
                <Route
                    exact path={'/dialogs'}
                    render={ () =>  <DialogsContainer/> }
                />
            </div>
        </div>
    );
}

export default App;


/*

    Альтернативный роутинг:
        <Route exact path={'/profile'} component={Profile}/>
        <Route exact path={'/dialogs'} component={Dialogs}/>


// рендерит если сменился урл
<Route
    exact path={'/profile'}
    render={ () =>
        <Profile
            store={props.store} /!* store: весь подключенный стор со всеми его подкапотными функциями *!/
        />
}/>
// рендерит если сменился урл
<Route
    exact path={'/dialogs'}
    render={ () =>
        <DialogsContainer
            store={props.store} /!* store: весь подключенный стор со всеми его подкапотными функциями *!/
            state={props.state} /!* state: все редьюсеры *!/
        />
}/>
*/
