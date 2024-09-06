import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getMovies } from "../services/apiCall";
import { Movie } from "../type";
const initialState = {
  movieList: [],
  loading: false,
  error: null,
};

export const fetchMovies = createAsyncThunk<Movie[]>(
  "movies/fetchMovies",
  async () => {
    const response = await getMovies();
    return response.results;
  }
);

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    clearMovieList: (state) => {
      state.movieList = [];
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchMovies.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.movieList = Array.isArray(payload) ? payload : [];
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { clearMovieList } = movieSlice.actions;
export default movieSlice.reducer;
