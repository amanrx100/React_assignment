import { createStore, applyMiddleware, combineReducers } from 'redux';
import {thunk} from 'redux-thunk';
import authReducer from './reducers/authReducer';
import imagesReducer from './reducers/imagesReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  images: imagesReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
