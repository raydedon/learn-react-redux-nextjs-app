import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducer/index';

// Middleware you want to use in production:

export default function configureStore(initialState = {}) {
    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const enhancer = composeEnhancers(applyMiddleware(thunk));

    return createStore(rootReducer, initialState, enhancer);
}
