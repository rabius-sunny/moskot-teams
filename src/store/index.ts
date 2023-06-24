import { configureStore, combineReducers } from '@reduxjs/toolkit'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import memberSlice from './memberSlice'
import teamSlice from './teamSlice'
import userSlice from './userSlice'

const rootReducer = combineReducers({
  member: memberSlice,
  team: teamSlice,
  user: userSlice
})

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['member', 'team', 'user']
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false
    })
})

export const persistor = persistStore(store)

export default store
