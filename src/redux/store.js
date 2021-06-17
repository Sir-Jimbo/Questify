import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
//import logger from 'redux-logger';
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
import storage from 'redux-persist/lib/storage';
import dashboardReducer from '../redux/dashboard/dashboard-reducers';
import authReducer from '../redux/auth/auth-reducer';

const middleware = [
   ...getDefaultMiddleware({
      serializableCheck: {
         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
   }),
];

const authPersistConfig = {
   key: 'token',
   storage,
   whitelist: ['token', 'refreshToken']
};

const store = configureStore({
   reducer: {
      auth: persistReducer(authPersistConfig, authReducer),
      dashboard: dashboardReducer
   },
   middleware,
   devTools: process.env.NODE_ENV === 'development',
});

const persistor = persistStore(store);

// eslint-disable-next-line import/no-anonymous-default-export
export default { store, persistor };
