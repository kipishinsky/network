import {combineReducers, createStore} from "redux";
import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";
import usersReducer from "./users_reducer";

let reducers = combineReducers({ /*
склеивает редьюсеры в одно и передает в стор
 */
    profilePage: profileReducer, /*
     profilePage - название ссылки на редьюсер. :
 profileReducer - подключаемая компонента import profileReducer from "./profile-reducer";
      */
    dialogsPage: dialogsReducer,
    sidebar: sidebarReducer,
    usersPage: usersReducer
});

let store = createStore(reducers); /*
создает стор - createStore, в параметры приходят сразу все редьюсеры,
которые объединяются при помощи подкапотной функции combineReducers (которая в
параметры принимает объект со всеми ссылками на редьюсеры) */
export default store;

window.store = store;