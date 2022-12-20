import {useDispatch} from "react-redux";
import {onDeleteTodo, onEditTodoId, onMarkTodoComplete} from "../../redux/action/actions";
import './TodoRowItem.css';
import ReadonlyTodoText from "../ReadonlyTodoText";
import EditTodoText from "../EditTodoText";

export interface TodoRowItemProps {
    id: string;
    text: string;
    completed: boolean;
    edit?: boolean;
}

const TodoRowItem = (props: TodoRowItemProps) => {
    const dispatch = useDispatch();

    const onEditHandler = () => {
        props.completed && dispatch(onMarkTodoComplete(props.id));
        dispatch(onEditTodoId(props.id));
    }
    const onDeleteHandler = () => dispatch(onDeleteTodo(props.id));

    return (
        <>
            <div>{!props.edit ? <ReadonlyTodoText id={props.id} text={props.text} completed={props.completed}/> : <EditTodoText id={props.id} text={props.text}/>}</div>
            <div className="edit" onClick={onEditHandler}><b>Edit</b></div>
            <div className="delete" onClick={onDeleteHandler}><b>Delete</b></div>
        </>
    );
};
export default TodoRowItem;
