import {ChangeEvent, useState} from "react";
import {useDispatch} from "react-redux";
import {createTodo} from "../../redux/action/actions";
import {Dispatch} from "redux";
const AddTodoText =  () => {
    const [text, setText] = useState('');
    const dispatch = useDispatch<Dispatch<any>>();
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => setText(event.target.value);

    const onSubmit = () => {
        dispatch(createTodo(text));
        setText('');
    }

    return (
        <div>
            <input type="text" name="name" onChange={handleChange} value={text}/>
            <input type="submit" onClick={onSubmit}/>
        </div>
    );
};

export default AddTodoText;
