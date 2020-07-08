import React from 'react';
import {Route} from "react-router-dom"

import Header from "./components/header/Header";
import Navbar from "./components/navbar/Navbar";
import Profile from "./components/profile/Profile";
import DialogsContainer from "./components/dialogs/DialogsContainer";

import './App.css';


const App = (props) => { /*
    в пропсах пришли:
        state: все редьюсеры,
        store: весь подключенный стор со всеми его подкапотными функциями
*/

    return (
        <div className={'app-wrapper'}>
            <Header/>
            <Navbar/>
            <div className={'app-wrapper-content'}>
                {/*
                    Альтернативный роутинг:
                        <Route exact path={'/profile'} component={Profile}/>
                        <Route exact path={'/dialogs'} component={Dialogs}/>
                */}
                <Route // рендерит если сменился урл
                    exact path={'/profile'}
                    render={ () =>
                        <Profile
                            store={props.store} /*
                                store: весь подключенный стор со всеми его подкапотными функциями
                            */
                        />
                    }/>
                <Route // рендерит если сменился урл
                    exact path={'/dialogs'}
                    render={ () =>
                        <DialogsContainer
                            store={props.store} /*
                                store: весь подключенный стор со всеми его подкапотными функциями
                            */
                            state={props.state} /*
                                state: все редьюсеры
                            */
                        />
                    }/>
            </div>
        </div>
    );
}

export default App;
