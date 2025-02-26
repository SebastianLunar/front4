import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";

export const store = configureStore({
  reducer: combineReducers({
    //Primer slice (tajada) que contendrá los usuarios registrados
    users: usersReducer.reducer
  })
})