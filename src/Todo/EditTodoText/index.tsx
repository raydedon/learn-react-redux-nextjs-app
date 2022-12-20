import {ChangeEvent, useState} from "react";
import {createTodo, editTodo, onEditTodoId} from "../../redux/action/actions";
import {useDispatch} from "react-redux";
import {Dispatch} from "redux";

export interface EditTodoTextProps {
    id: string;
    text: string;
}

const EditTodoText = (props: EditTodoTextProps) => {
    const [text, setText] = useState(props.text);
    const dispatch = useDispatch<Dispatch<any>>();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value);

    const onSubmit = () => {
        dispatch(editTodo(props.id, text));
        dispatch(onEditTodoId(''));
    }

    return (
        <div>
            <input type="text" name="name" onChange={handleChange} value={text}/>
            <input type="submit" onClick={onSubmit}/>
        </div>
    );
};

export default EditTodoText;
