import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { current } from "./slices/currentUser";

export const store = configureStore({
  reducer: combineReducers({
    //Primer slice (tajada) que contendrá los usuarios registrados
    users: usersReducer.reducer,
    //Segundo slice (tajada) que contendrá el usuario autenticado con Firebase
    currentUser: current.reducer
  })
})