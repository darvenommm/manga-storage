import { configureStore, combineReducers } from '@reduxjs/toolkit';

import { persistReducer, persistStore } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import { themeReducer } from '../features/Theme/logic/themeSlice';
import { mangaStorageReducer } from '../features/FavoriteManga/logic/mangaStorageSlice';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['theme', 'mangaStorage'],
};

const rootReducer = combineReducers({
  theme: themeReducer,
  mangaStorage: mangaStorageReducer,
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  devTools: import.meta.env.DEV,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(store);
