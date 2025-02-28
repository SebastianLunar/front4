import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { usersReducer } from "./slices/usersSlice";
import { current } from "./slices/currentUser";
import { moviesReducer } from "./slices/moviesSlice";

export const store = configureStore({
  reducer: combineReducers({
    //Primer slice (tajada) que contendrá los usuarios registrados
    users: usersReducer.reducer,
    //Segundo slice (tajada) que contendrá el usuario autenticado con Firebase
    currentUser: current.reducer,
    //Tercer slice (tajada) que contendrá las películas de mi App
    movies: moviesReducer.reducer
  })
})