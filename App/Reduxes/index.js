import { persistReducer } from 'redux-persist';
import { combineReducers } from 'redux';
import createStoreAndMiddleware from './CreateStore';
import rootSaga from 'Sagas';
import ReduxPersist from 'Config/ReduxPersist';

import { reducer as ProductReducer } from './Reducers/ProductReducer';

export const reducers = combineReducers({
  product: ProductReducer
});

export default () => {
  const persistConfig = ReduxPersist.storeConfig;
  const finalReducers = ReduxPersist.active
    ? persistReducer(persistConfig, reducers)
    : reducers;
  const { store, sagasManager, sagaMiddleware } = createStoreAndMiddleware(
    finalReducers,
    rootSaga
  );
  return store;
};
