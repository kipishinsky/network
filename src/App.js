import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Main from "./components/Main/Main";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from "react-router-dom";


const App = () => {

  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Navbar/>
              <div className={'app-wrapper-content'}>
                  <Route path={'/profile'} component={Main}/>
                  <Route path={'/dialogs'} component={Dialogs}/>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
