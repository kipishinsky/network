import React from 'react';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Main/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter} from "react-router-dom"; /*устанавливаем реакт роутер дом
команда в консоле
npm i react-router-dom -save (флаг -save означает что нужно внести
запись в packagejson файл - сохранит все зависимости и улетит на гит.
при клонированнии репазы с гита, не будет проблем с зависимостями

при новой компиляции кем либо нужно будет прописать npm install и все будет работать
 */
import {Route} from "react-router-dom"


const App = (props) => {

  return (
      <BrowserRouter>
          <div className={'app-wrapper'}>
              <Header/>
              <Navbar/>
              <div className={'app-wrapper-content'}>
                  {/*добавляем роутинг нашим компонентам,
                  чтобы путь отображался кореектно для каждой страницы

                  в 27 уроке, прокидываем пропты в route
                  route может принимать в пропсах компоненту, либо рендер
                  мы идем по пути рендинга и передает рендингу функцию, а в ней
                  уже передаем компоненты с нужными нам параметрами

                  рендер возвращает функцию, которая возвращает jsx. если идти через компоненту
                  то можно передать только компоненту
                  */}
                  {/*<Route exact path={'/profile'} component={Profile}/>*/}
                  {/*<Route exact path={'/dialogs'} component={Dialogs}/>*/}
                  <Route exact path={'/profile'} render={ () =>
                      <Profile
                          state={props.state.profilePage}
                          dispatch={props.dispatch}
                      />
                  }/>
                  <Route exact path={'/dialogs'} render={() =>
                      <Dialogs
                          store={props.store}
                      />
                  }/>
              </div>

          </div>
      </BrowserRouter>
  );
}

export default App;
