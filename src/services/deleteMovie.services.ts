import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { IMovie } from "../interfaces";

export const deleteMovieServices = async (idUser: number): Promise<void> => {
  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  let findMovie: IMovie | null = await movieRepository.findOneBy({
    id: idUser,
  });

  await movieRepository.remove(findMovie!);
};
