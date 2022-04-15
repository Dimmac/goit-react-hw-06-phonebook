import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // defaults to localStorage for web
import itemsReducer from './items/items-reducer';

const contactsPersistConfig = {
  key: 'contactsKey',
  storage,
  blacklist: ['filter'], //Забирає властивість filter з localstorage, також існує whitelist-який включає властивість в localstorage
};
/* const rootReducer = combineReducers({
  contacts: persistReducer(persistConfig, itemsReducer), //додає тільки окремий стан в localstorage
}); */
//const persistedReducer = persistReducer(persistConfig, rootReducer);//додає весь стан в localstorage

////////Store///////////////////
const store = configureStore({
  reducer: {
    contacts: persistReducer(contactsPersistConfig, itemsReducer), //тут була силка на rootReducer
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});
//console.log(store.getState());

const persistor = persistStore(store);
export { store, persistor };
