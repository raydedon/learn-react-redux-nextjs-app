import {combineReducers} from 'redux';
import {editTodoId} from "./edit-todo";
import {list} from "./list";

const rootReducer = combineReducers({
    list,
    editTodoId,
});

export default rootReducer;
