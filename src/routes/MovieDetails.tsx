import { useLoaderData } from "react-router-dom";
import { getMoviesDetails } from "../services/apiCall";
import styles from "../styles/MovieDetails.module.css";
import { MovieDetailsType } from "../type";
export const loader = async ({ params }: { params: { id: string } }) => {
  const data = await getMoviesDetails(params.id);
  return { data };
};
export const MovieDetails = () => {
  const { data } = useLoaderData() as { data: MovieDetailsType };
  const IMG_API = "https://image.tmdb.org/t/p/w1280";
  const {
    title,
    poster_path,
    overview,
    vote_average,
    vote_count,
    release_data,
  } = data;
  return (
    <div className={styles.detailWrapper}>
      <h1>{title}</h1>
      <div className={styles.bottomWrapper}>
        <div className={styles.postWrapper}>
          <img src={IMG_API + poster_path} alt="img" />
        </div>
        <ul className={styles.ul}>
          <li>
            <span>Overview:</span>
            {overview}
          </li>
          <li>
            <span>Name:</span>
            {title}
          </li>
          <li>
            <span>IMDB:</span>
            {vote_average}
          </li>
          <li>
            <span>vote count:</span>
            {vote_count}
          </li>
          <li>
            <span>Date:</span>
            {release_data}
          </li>
        </ul>
      </div>
    </div>
  );
};
