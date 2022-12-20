import {Provider, useDispatch, useSelector} from "react-redux";
import {fetchTodos} from "../redux/action/actions";
import {useEffect} from "react";
import AddTodoText from "./AddTodoText";
import TodoList from "./TodoList";
import {DispatchType} from "../types";
const Todo = () => {
    return (
        <div>
            <AddTodoText/>
            <TodoList/>
        </div>
    )
}

export default Todo;