import { persistStore } from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import DebugConfig from 'Config/DebugConfig';
import ReduxPersist from 'Config/ReduxPersist';

const updateReducers = (store: Object) => {
  const reducerVersion = ReduxPersist.reducerVersion;
  AsyncStorage.getItem('reducerVersion')
    .then(localVersion => {
      if (localVersion !== reducerVersion) {
        if (DebugConfig.useReactotron) {
          console.tron.display({
            name: 'PURGE',
            value: {
              'Old Version:': localVersion,
              'New Version:': reducerVersion
            },
            preview: 'Reducer Version Change Detected',
            important: true
          });
        }
        // Purge store
        persistStore(store, null).purge();
        AsyncStorage.setItem('reducerVersion', reducerVersion);
      } else {
        persistStore(store, null);
      }
    })
    .catch(() => {
      persistStore(store, null);
      AsyncStorage.setItem('reducerVersion', reducerVersion);
    });
};

const Rehydration = { updateReducers };

export default Rehydration;
