import { createStore, combineReducers } from 'redux';
import mapReducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
const rootReducer = combineReducers({
  map: mapReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
