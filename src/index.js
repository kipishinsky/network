import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

/*import store from "./redux/store";*/
import store from "./redux/redux-store";

import App from './App';
import {BrowserRouter} from "react-router-dom";

import './index.css';

let rerenderEntireTree = (state) => { /*
    rerenderEntireTree - перерисуй все дерево
    в параметры (state) приходят все редьюсеры из redux-store (let store)

    profilePage: profileReducer, // profilePage (название ссылки на редьюсер) : profileReducer (подключаемая компонента import profileReducer from "./profile-reducer";)
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer
*/
    ReactDOM.render( // спец. функция, занимается отрисовкой
        <BrowserRouter> {/*
        https://habr.com/ru/post/329996/

            устанавливаем реакт роутер дом
            команда в консоле
            npm i react-router-dom -save (флаг -save означает что нужно внести
            запись в packagejson файл - сохранит все зависимости и улетит на гит.
            при клонированнии репазы с гита, не будет проблем с зависимостями

            при новой компиляции кем либо нужно будет прописать npm install и все будет работать
        */}
            <App
                state={state} /*
                    объедененные редьюсеры
                */
                store={store} /*
                    передаем подключенный стор со всеми его подкапотными функциями
                */
            />
        </BrowserRouter>, document.getElementById('root'));

    {/*
            // контекст api
            need imports

            <BrowserRouter>
                <provider store={store}>
                    <App/>
                </provider>
            </BrowserRouter>, document.getElementById('root'));

            */}
};

rerenderEntireTree(store.getState()); /*
    store.getState() - store переменная которая в redux-store создаем стор
    по средствам объединения редьюссеров. Метод getStore() - Возвращает текущее состояние вашего приложения.
    Оно равно последнему возвращенному значению из редюсера стора. (any): Текущее состояние вашего приложения.
*/

store.subscribe(() => { /*
    Добавляет слушателя. Он будет вызываться каждый раз, когда экшен отправлен и
    некоторая часть дерева состояния могла потенциально измениться.
    Вы можете затем вызвать getState(), для того, чтобы прочитать текущее состояние
    дерева стора внутри обратного вызова.
*/
    let state = store.getState() /*
    прочитать текущее состояние дерева стора
    */
    rerenderEntireTree(state); /*
     перерисуй все дерево
     */
});

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
