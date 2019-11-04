import { createStore, compose, applyMiddleware } from "redux";
import { reducer } from "../reducers/index";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
 key: 'root',
 storage: storage,
 stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
};

const pReducer = persistReducer(persistConfig, reducer);

export const store = createStore(
  pReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export const persistor = persistStore(store);
