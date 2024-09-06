export type MovieDetailsType = {
  title: string;
  poster_path: string;
  overview: string;
  vote_average: number;
  vote_count: number;
  release_data: string;
};

export type Movie = {
  id: number;
  title: string;
  vote_average: number;
  poster_path: string;
};
