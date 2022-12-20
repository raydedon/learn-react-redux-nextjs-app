import {IAction, ITodo, ITodoActionTypes} from "../../types";
import {IFetchListActionPayload} from "../action/actions";

export type ActionPayloadTypes = IAction<IFetchListActionPayload & ITodo>

export const list = (state: ITodo[] = [], action: ActionPayloadTypes) => {
    let {type, payload} = action;
    switch(type) {
        case ITodoActionTypes.CREATE_TODO_SUCCESS:
            return [...state, {...payload, id: state.length+1}];
        case ITodoActionTypes.TODO_MARK_COMPLETED_SUCCESS:
            return state.map(i => i.id === payload?.id ? {...i, completed: !i.completed} : i);
        case ITodoActionTypes.EDIT_TODO_TEXT_SUCCESS:
            return state.map(i => i.id === payload?.id ? {...i, text: payload.text} : i);
        case ITodoActionTypes.DELETE_TODO_SUCCESS:
            return state.filter(i => i.id !== payload?.id);
        case ITodoActionTypes.FETCH_TODOS_SUCCESS:
            const {list} = payload as IFetchListActionPayload;
            return [...state, ...list];
        default:
            return state;
    }
};