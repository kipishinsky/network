import React from 'react';
import * as serviceWorker from './serviceWorker';
import store from "./redux/State";
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";


/* в 28 уроке выносим данные на уровень выше, потом еще выше и пока самый высокий
уровень это index.js. потом все данные прокидываем до хвостов в пропсах.

потом мы создадим уже редакс и сам стейт (state) и все данные убегут снова выше и оттуда
будем в пропсах кидать по хвостам данные
*/

let rerenderEntireTree = (state) => {

    ReactDOM.render(
        <BrowserRouter>
            <App state={state} addPost={store.addPost.bind(store)} updateNewPostText={store.updateNewPostText.bind(store)}/>
        </BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);


//ReactDOM.render(<App state={state} addPost={addPost}/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
