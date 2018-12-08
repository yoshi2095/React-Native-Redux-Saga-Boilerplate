import createSagaMiddleware from 'redux-saga';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import uiModule from './ui/index';
//import logger from 'redux-logger'

const sagas = [uiModule.sagas];

const reducers = combineReducers({
    ui: uiModule.reducer
});

const sagaMiddleware = createSagaMiddleware(); //dont know

const store = createStore(
    reducers,
    applyMiddleware(    //dont know
        sagaMiddleware
    )
);

sagas.forEach((saga) => {
    sagaMiddleware.run(...saga);
});

export default store;