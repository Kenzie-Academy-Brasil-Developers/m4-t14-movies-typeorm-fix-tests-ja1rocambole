import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovie } from "../interfaces";

export const updateMovieService = async (id: number, payload: IMovie) => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  let findMovie: IMovie | null = await movieRepository.findOneBy({
    id,
  });

  const newMovie = await movieRepository.save({ ...findMovie, ...payload });

  return newMovie;
};
