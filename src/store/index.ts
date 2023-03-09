import { configureStore } from "@reduxjs/toolkit";
import type { Reducer, AnyAction } from "@reduxjs/toolkit";
import usersReducers from "./modules/users";
import type { UsersState } from "./modules/users";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { useDispatch } from "react-redux";
import type { PersistPartial } from "redux-persist/es/persistReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  whitelist: ["token"],
};

const store = configureStore({
  reducer: {
    users: persistReducer(persistConfig, usersReducers) as Reducer<
      UsersState & PersistPartial,
      AnyAction
    >,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
