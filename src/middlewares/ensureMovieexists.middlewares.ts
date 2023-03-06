import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { Movie } from "../entities";
import { AppError } from "../errors";
import { IMovie } from "../interfaces";

export const ensureMovieexistsMiddlewares = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const idUrl = req.params.id;

  const movieRepository: Repository<Movie> = AppDataSource.getRepository(Movie);

  const findMovie: IMovie | null = await movieRepository.findOneBy({
    id: Number(idUrl),
  });

  if (!findMovie) throw new AppError("Movie not found", 404);

  next();
};
