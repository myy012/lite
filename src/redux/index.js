/**
 * @desc [初始化redux]
 */
import { combineReducers } from 'redux-immutable';
import Immutable from 'immutable';
import { createStore, applyMiddleware, compose } from 'redux';
import configureStore from './utils/CreateStore';
import rootSaga from '../sagas'
import { serviceReducers } from './test';
import { navigationReducers } from './test';

// use Immutable.Map to create the store state tree
const initialState = Immutable.Map();

export default () => {
  // Assemble The Reducers
    const rootReducer = combineReducers({
        ...serviceReducers,
        ...navigationReducers
    });

    return configureStore(rootReducer, initialState, rootSaga);
}
