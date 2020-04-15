import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Main/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = (props) => {

  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Navbar/>
              <div className={'app-wrapper-content'}>
                  {/*<Route exact path={'/profile'} component={Profile}/>*/}
                  {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}

                  <Route exact path={'/profile'} render={ () => <Profile state = {props.state.profilePage} />}/>
                  <Route exact path={'/dialogs'} render={ () => <Dialogs state = {props.state.dialogsPage}  />}/>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
