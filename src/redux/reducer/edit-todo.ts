import {IAction, ITodo, ITodoActionTypes} from "../../types";

export const editTodoId = (state: string = '', action: IAction<ITodo>) => {
    let {type, payload} = action;
    switch(type) {
        case ITodoActionTypes.EDIT_TODO_ID:
            return payload?.id;
        default:
            return state;
    }
};