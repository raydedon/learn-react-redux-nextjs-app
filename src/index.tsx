import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Todo from "./Todo";
import configureStore from "./redux/store";
import {Provider} from "react-redux";
import {fetchTodos} from "./redux/action/actions";
import {DispatchType} from "./types";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
export const store = configureStore({list: [], editTodoId: ''});
store.dispatch<any>(fetchTodos());
root.render(
    <React.StrictMode>
        <Provider store={store}>
            <Todo />
        </Provider>
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
