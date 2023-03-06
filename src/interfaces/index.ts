import { IMovie, IMovieWithoutID } from "./movie.interface";
interface IObjPagination {
  sort: string;
  order: "ASC" | "DESC";
  perPage: number;
  page: number;
}

export { IMovie, IMovieWithoutID, IObjPagination };
