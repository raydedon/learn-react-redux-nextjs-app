import {DispatchType, IAction, ITodo, ITodoActionTypes, ITodoDb, ITodoState} from "../../types";

export interface IFetchListActionPayload {
    list: ITodo[];
}


const DUMMY_TODO = {_id: '1', text: 'dummy text', completed: false};

export const createTodo = (text: string) => {
    const createTodoRequest = (): IAction<ITodo> => ({
        type: ITodoActionTypes.CREATE_TODO_REQUEST
    });

    const createTodoSuccess = (todo: ITodo): IAction<ITodo> => {
        return {
            type: ITodoActionTypes.CREATE_TODO_SUCCESS,
            payload: todo
        };
    };

    const createTodoFailure = (): IAction<ITodo> => ({
        type: ITodoActionTypes.CREATE_TODO_FAILURE
    });

    return (dispatch: DispatchType, getState: () => ITodoState) => {
        dispatch(createTodoRequest());

        const prom = new Promise((resolve) => {
            setTimeout(() => resolve({text, completed: false}), 300);
        })

        return prom.then((r) => dispatch(createTodoSuccess(r as ITodo)))
    };
}



export const onEditTodoId = (id: string): IAction<Partial<ITodo>> => ({
    type: ITodoActionTypes.EDIT_TODO_ID,
    payload: {
        id
    }
});

export const onDeleteTodo = (id: string): IAction<Partial<ITodo>> => ({
    type: ITodoActionTypes.DELETE_TODO_SUCCESS,
    payload: {
        id
    }
});

export const onMarkTodoComplete = (id: string): IAction<Partial<ITodo>> => ({
    type: ITodoActionTypes.TODO_MARK_COMPLETED_SUCCESS,
    payload: {
        id
    }
});

const TODO_LIST = [{
    _id: '10',
    text: 'facebook',
    completed: false
}, {
    _id: '11',
    text: 'myntra',
    completed: false

}, {
    _id: '12',
    text: 'flipkart',
    completed: false
}, {
    _id: '13',
    text: 'instagram',
    completed: false
}];

export const fetchTodos = () => {
    const fetchTodosRequest = (): IAction<ITodo> => ({
        type: ITodoActionTypes.FETCH_TODOS_REQUEST
    });

    const fetchTodosSuccess = (list: ITodo[]) => {
        return {
            type: ITodoActionTypes.FETCH_TODOS_SUCCESS,
            payload: {
                list
            }
        };
    };

    const fetchTodosFailure = (): IAction<ITodo> => ({
        type: ITodoActionTypes.FETCH_TODOS_FAILURE
    });

    return (dispatch: DispatchType) => {
        dispatch(fetchTodosRequest());

        const prom = new Promise((resolve) => {
            setTimeout(() => resolve(TODO_LIST.map(({_id, text, completed}) => ({id: _id, text, completed}))), 300);
        })

        return prom.then((r) => dispatch(fetchTodosSuccess(r as ITodo[])))
    };
}

export const editTodo = (id: string, text: string) => {
    const editTodoRequest = (): IAction<Partial<ITodo>> => ({
        type: ITodoActionTypes.EDIT_TODO_TEXT_REQUEST,
        payload: {
            id,
            text
        }
    });

    const editTodoSuccess = (): IAction<Partial<ITodo>> => {
        return {
            type: ITodoActionTypes.EDIT_TODO_TEXT_SUCCESS,
            payload: {
                id,
                text
            }
        };
    };

    const editTodoFailure = (): IAction<ITodo> => ({
        type: ITodoActionTypes.EDIT_TODO_TEXT_FAILURE
    });

    return (dispatch: DispatchType, getState: () => ITodoState) => {
        dispatch(editTodoRequest());

        const prom = new Promise((resolve) => {
            setTimeout(() => resolve({id, text}), 300);
        })

        return prom.then(() => dispatch(editTodoSuccess()));
    };
}

