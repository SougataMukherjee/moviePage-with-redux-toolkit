import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies } from "../features/movieSlice";
import style from "../styles/Movies.module.css";
import { Loading } from "../components/Loading";
import { useNavigate } from "react-router-dom";
import { Movie } from "../type";
export const Movies = () => {
  const dispatch = useDispatch();
  const { movieList, loading, error } = useSelector((state) => state.movies);
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchMovies());
  }, [dispatch]);

  const getVote = (vote: number): string => {
    if (vote > 8) {
      return "green";
    } else if (vote >= 6) {
      return "orange";
    } else {
      return "red";
    }
  };

  return (
    <div className={style.mainWrapper}>
      {error && <h1>{error}</h1>}
      {loading && <Loading />}
      {!loading && movieList && (
        <div className={style.moviesWrapper}>
          {movieList.map((movie: Movie, index: number) => {
            const { title, vote_average, poster_path, id } = movie;
            return (
              <div
                onClick={() => navigate(`/${id}`)}
                key={index}
                className={style.cardWrapper}
              >
                <img src={IMG_API + poster_path} alt="img" />
                <div className={style.cardBottom}>
                  <h5>{title}</h5>
                  <span
                    className={style.exportedStyle}
                    style={{ backgroundColor: `${getVote(vote_average)}` }}
                  >
                    {vote_average}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
