import { createStore, combineReducers } from 'redux';
import { reducer as form } from 'redux-form';

const reducers = combineReducers({
  form
  // your other reducers
});

export default createStore(reducers);
