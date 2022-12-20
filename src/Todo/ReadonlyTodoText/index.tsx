import * as React from 'react';
import {onMarkTodoComplete} from "../../redux/action/actions";
import {useDispatch} from "react-redux";
import './ReadonlyTodoText.css';
import classNames from "classnames";
import {ITodo} from "../../types";

export interface ReadonlyTodoTextProps extends ITodo {
}

const ReadonlyTodoText = (props: ReadonlyTodoTextProps) => {
    const dispatch = useDispatch();
    const onCompleteHandler = () => dispatch(onMarkTodoComplete(props.id));
    return (
        <div onClick={onCompleteHandler} className={classNames({'completed': props.completed})}>{props.text}</div>
    );
};

export default ReadonlyTodoText;
