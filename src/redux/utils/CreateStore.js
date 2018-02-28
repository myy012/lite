/**
 * @desc [拓展createStore方法]
 */
import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { autoRehydrate } from 'redux-persist-immutable';
import ReduxPersist from '../../config/ReduxPersistConfig';
import Config from '../../config/DebugConfig';
import RehydrationServices from '../../services/RehydrationServices';

// creates the store
export default (rootReducer, initialState, rootSaga) => {
    /* ------------- Redux Configuration ------------- */

    const middleware = [];
    const enhancers = [];

    /* ------------- Saga Middleware ------------- */
    const sagaMonitor = Config.useReactotron ? console.tron.createSagaMonitor() : null;
    const sagaMiddleware = createSagaMiddleware({ sagaMonitor });
    middleware.push(sagaMiddleware);

    /* ------------- Assemble Middleware ------------- */
    enhancers.push(applyMiddleware(...middleware));

    // add the autoRehydrate enhancer
    if (ReduxPersist.active) {
        enhancers.push(autoRehydrate());
    }

    // if Reactotron is enabled (default for __DEV__), we'll create the store through Reactotron
    const createAppropriateStore = Config.useReactotron ? console.tron.createStore : createStore;
    const store = createAppropriateStore(rootReducer, initialState, compose(...enhancers));

    // configure persistStore and check reducer version number
    if (ReduxPersist.active) {
        RehydrationServices.updateReducers(store);
    }

    sagaMiddleware.run(rootSaga);

    return store;
}
