import { configureStore } from "@reduxjs/toolkit/dist/configureStore";
import usersReducers from "./modules/users";
const store = configureStore({
  reducer: { users: usersReducers },
});

export default store;
