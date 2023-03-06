import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovie, IObjPagination } from "../interfaces";
import { multipleMovieCreateSchema } from "../schemas";
import { FindManyOptions } from "typeorm";

export const readMoviesService = async (
  objPagination: FindManyOptions
): Promise<[IMovie[], number]> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);
  const findMovies = await movieRepository.find(objPagination);
  const count = await movieRepository.count();

  const movies = multipleMovieCreateSchema.parse(findMovies);

  return [movies, count];
};
