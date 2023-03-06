import { Request, Response } from "express";
import { FindManyOptions } from "typeorm";
import { IMovieWithoutID, IObjPagination } from "../interfaces";
import {
  createMovieService,
  readMoviesService,
  constructorObjReturn,
  constructorPagination,
  updateMovieService,
  deleteMovieServices,
} from "../services/";

export const createMovieController = async (req: Request, res: Response) => {
  const movieData: IMovieWithoutID = req.body;

  const newMovie = await createMovieService(movieData);

  return res.status(201).json(newMovie);
};

export const readMoviesController = async (req: Request, res: Response) => {
  const [objFindConfig, objPagination]: [FindManyOptions, IObjPagination] =
    constructorPagination(req.query);

  const moviesAndCount = await readMoviesService(objFindConfig);

  const objReturn = constructorObjReturn(moviesAndCount, objPagination);

  return res.status(200).json(objReturn);
};

export const updateMoviesController = async (req: Request, res: Response) => {
  const { body, params } = req;
  const id: number = Number(params.id);

  const movieUpdated = await updateMovieService(id, body);

  return res.status(200).json(movieUpdated);
};

export const deleteMoviesController = async (req: Request, res: Response) => {
  await deleteMovieServices(parseInt(req.params.id));

  return res.status(204).json();
};
