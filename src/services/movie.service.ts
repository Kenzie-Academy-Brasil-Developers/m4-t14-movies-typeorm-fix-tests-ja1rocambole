import { IMovie, IMovieWithoutID } from "../interfaces";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { Repository } from "typeorm";
import { movieCreateSchema } from "../schemas";

export const createMovieService = async (movieData: IMovieWithoutID) => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const movie = movieRepository.create(movieData);

  await movieRepository.save(movie);

  const newMovie = movieCreateSchema.parse(movie);

  return newMovie;
};
