import {useSelector} from "react-redux";
import TodoRowItem from "../TodoRowItem";
import {ITodo, ITodoState} from "todotypes";
import './TodoList.css';
import {editTodo} from "../../redux/action/actions";

const TodoList = () => {
    const list = useSelector<ITodoState, ITodo[]>((state) => state.list);
    const editTodoId = useSelector<ITodoState, string>((state) => state.editTodoId) ?? '';
    return (
        <div className="list">
            {list.map(todo => {
                return <TodoRowItem key={todo.id} {...todo} edit={editTodoId === todo.id}/>
            })}
        </div>
    );
};

export default TodoList;
