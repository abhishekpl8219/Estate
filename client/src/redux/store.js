<<<<<<< HEAD
import { combineReducers, configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import { persistReducer, persistStore } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { version } from "mongoose";

const persistConfig = {
  key: "root",
  storage,
  version: 1,
};
const rootReducer = combineReducers({ user: userReducer });
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store = configureStore({
  reducer: persistedReducer,
=======
import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";

export const store = configureStore({
  reducer: { user: userReducer },
>>>>>>> 8bdef9144638dcb3dad6671b9f4c15445d1adebd
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
<<<<<<< HEAD

export const persistor = persistStore(store);
=======
>>>>>>> 8bdef9144638dcb3dad6671b9f4c15445d1adebd
