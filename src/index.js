import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import store from "./redux/redux-store";
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import './index.css';


ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </BrowserRouter>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/*    <BrowserRouter> {/!*
        https://habr.com/ru/post/329996/

            устанавливаем реакт роутер дом
            команда в консоле
            npm i react-router-dom -save (флаг -save означает что нужно внести
            запись в packagejson файл - сохранит все зависимости и улетит на гит.
            при клонированнии репазы с гита, не будет проблем с зависимостями

            при новой компиляции кем либо нужно будет прописать npm install и все будет работать
        *!/}
        <App
            state={state} /!*
                    объедененные редьюсеры
                *!/
            store={store} /!*
                    передаем подключенный стор со всеми его подкапотными функциями
                *!/
        />
    </BrowserRouter>, document.getElementById('root'));*/