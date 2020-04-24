import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { chatReducer } from './reducers/chatReducer';


const rootReducer = combineReducers({
  chat: chatReducer,
});

export default createStore(rootReducer, applyMiddleware(thunk));
