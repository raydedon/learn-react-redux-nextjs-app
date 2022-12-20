declare module 'todotypes' {
    export enum ITodoActionTypes {
        CREATE_TODO_REQUEST = 'CREATE_TODO_REQUEST',
        CREATE_TODO_SUCCESS = 'CREATE_TODO_SUCCESS',
        CREATE_TODO_FAILURE = 'CREATE_TODO_FAILURE',
        EDIT_TODO_TEXT_REQUEST = 'EDIT_TODO_TEXT_REQUEST',
        EDIT_TODO_TEXT_SUCCESS = 'EDIT_TODO_TEXT_SUCCESS',
        EDIT_TODO_TEXT_FAILURE = 'EDIT_TODO_TEXT_FAILURE',
        ADD_TODO_INPUT_TEXT_CHANGE = 'ADD_TODO_INPUT_TEXT_CHANGE',
        FETCH_TODOS_REQUEST = 'FETCH_TODOS_REQUEST',
        FETCH_TODOS_SUCCESS = 'FETCH_TODOS_SUCCESS',
        FETCH_TODOS_FAILURE = 'FETCH_TODOS_FAILURE',
        TODO_MARK_COMPLETED_SUCCESS = 'TODO_MARK_COMPLETED_SUCCESS',
        DELETE_TODO_SUCCESS = 'DELETE_TODO_SUCCESS',
        EDIT_TODO_ID = 'EDIT_TODO_ID'
    }

    export interface IAction<T> {
        type: ITodoActionTypes;
        payload?: T;
    }

    export interface ITodo {
        id: string;
        text: string;
        completed: boolean;
    }

    export interface ITodoDb {
        _id: string;
        text: string;
        completed: boolean;
    }

    export interface ITodoState {
        list: ITodo[];
        editTodoId: string;
    }

    export type DispatchType = (args: IAction) => IAction;
}
