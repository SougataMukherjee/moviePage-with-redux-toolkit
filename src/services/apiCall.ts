import axios from "axios";

export const getMovies = async () => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  console.log("apiKey: ", apiKey);
  const FEATURED_KEY = `https://api.themoviedb.org/3/discover/movie?api_key=${apiKey}&page=1`;
  console.log("FEATURED_KEY: ", FEATURED_KEY);
  try {
    const { data } = await axios(FEATURED_KEY);
    return data;
  } catch (e) {
    console.error(e);
  }
};
export const getMoviesDetails = async (id: number | string) => {
  const apiKey = import.meta.env.VITE_APP_API_KEY;
  console.log("apiKey: ", apiKey);
  const DETAILS_KEY = `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}`;
  try {
    const { data } = await axios(DETAILS_KEY);
    return data;
  } catch (e) {
    console.error(e);
  }
};
