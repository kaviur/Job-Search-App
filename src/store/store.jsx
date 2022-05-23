
import { applyMiddleware, compose, createStore,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import offersReducer from '../reducers/offersReducer';

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    offers: offersReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);