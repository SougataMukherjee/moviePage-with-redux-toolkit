import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import moviesReducer from "../features/movieSlice";
import { Movie } from "../type";
export type RootState = {
  movies: {
    movieList: Movie[];
    loading: boolean;
    error: string | null;
  };
};
const store = configureStore({
  reducer: {
    auth: authReducer,
    movies: moviesReducer,
  },
});
export default store;
export type AppDispatch = typeof store.dispatch;
