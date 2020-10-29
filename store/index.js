import { createStore, combineReducers } from 'redux';
import mapReducer from './reducers/reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { persistReducer, persistStore } from 'redux-persist';
// import { AsyncStorage } from '@react-native-community/async-storage';
import storage from 'redux-persist/lib/storage';

const rootReducer = combineReducers({
  map: mapReducer,
});

const persisitConfig = {
  key: 'root',
  storage,
  whiteList: ['map'],
};

const persistedReducer = persistReducer(persisitConfig, rootReducer);

const store = createStore(persistedReducer, composeWithDevTools());

export const persistor = persistStore(store);
export default store;
