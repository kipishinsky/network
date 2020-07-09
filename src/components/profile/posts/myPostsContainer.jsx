import React from "react";
import {pushNewPostProfileCreator, addNewValueProfileCreator} from "../../../redux/profile-reducer";
import Posts from "./Posts";

const MyPostsContainer = (props) => {  /*
        приходит store
*/

    let state = props.store.getState();  /*
        получить полный стор в виде: store = createStore(reducers);
    */

    let pushNewPostTextAreaProfileCallback = () => {
        props.store.dispatch(pushNewPostProfileCreator()); /*
         передаем функцию (dispatch(action) - Отправляет экшен. Это единственный способ изменить состояние.
         Функция редюсера стора будет вызвана с текущим результатом getState() и переданным
         dispatch (action) синхронно. Возвращенное значения будет содержать следующие состояние.
         Оно будет возвращено из getState() сразу же и подписчики будут немедленно уведомлены.)
        */
    };
    let addNewValueTextProfileCallback = (text) => {
        let action = addNewValueProfileCreator(text);
        props.store.dispatch(action); /*
         передаем функцию (dispatch(action) - Отправляет экшен. Это единственный способ изменить состояние.
         Функция редюсера стора будет вызвана с текущим результатом getState() и переданным
         dispatch (action) синхронно. Возвращенное значения будет содержать следующие состояние.
         Оно будет возвращено из getState() сразу же и подписчики будут немедленно уведомлены.)
        */
    };

    return (
        <Posts
            addNewValueText={addNewValueTextProfileCallback}
            pushNewPost={pushNewPostTextAreaProfileCallback}
            posts={state.profilePage.posts}
            newPostText={state.profilePage.newPostText}
        />


        /*

        // store context

        <StoreContext.Consumer>
        // очень важно, чтобы фигур.скобки были с новой строки
            { (store) => {

                let state = store.getState();

                let pushNewPostTextAreaProfileCallback = () => {
                    store.dispatch(pushNewPostProfileCreator());
                };
                let addNewValueTextProfileCallback = (text) => {
                    let action = addNewValueProfileCreator(text);
                    store.dispatch(action);
                };

                return <Posts
                            addNewValueText={addNewValueTextProfileCallback}
                            pushNewPost={pushNewPostTextAreaProfileCallback}
                            posts={state.profilePage.posts}
                            newPostText={state.profilePage.newPostText}
                        />
                }
            }
        </StoreContext.Consumer>



        */
    )
};
export default MyPostsContainer;
