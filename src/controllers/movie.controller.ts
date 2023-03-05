import { Request, Response } from "express";
import { IMovieWithoutID } from "../interfaces";
import { createMovieService } from "../services/movie.service";

export const createMovieController = async (req: Request, res: Response) => {
  const movieData: IMovieWithoutID = req.body;

  console.log("controller");

  const newMovie = await createMovieService(movieData);

  return res.status(201).json(newMovie);
};
