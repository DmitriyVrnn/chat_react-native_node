import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { chatReducer } from './reducers/chat.reducer';
import { userReducer } from './reducers/user.reducer';


const rootReducer = combineReducers({
  user: userReducer,
  chat: chatReducer,
});

export default createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));
