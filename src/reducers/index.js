import { createStore, combineReducers, applyMiddleware } from 'redux'
import { reducer as formReducer } from 'redux-form'
import thunk from 'redux-thunk';
import Member from './member.js';

const rootReducer = combineReducers({
  // ...your other reducers here
  // you have to pass formReducer under 'form' key,
  // for custom keys look up the docs for 'getFormState'
  Member,
  form: formReducer
})

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

export default store;
