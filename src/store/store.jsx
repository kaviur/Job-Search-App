
import { applyMiddleware, compose, createStore,combineReducers } from 'redux'
import thunk from 'redux-thunk';
import offersReducer from '../reducers/offersReducer';
import { postulantReducer } from '../reducers/postulantReducer'
import { recruiterReducer } from '../reducers/recruiterReducer'

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
    postulant: postulantReducer,
    recruiter: recruiterReducer,
    offers: offersReducer
});


export const store = createStore(
    reducers,
    composeEnhancers(
        applyMiddleware( thunk )
    )
);