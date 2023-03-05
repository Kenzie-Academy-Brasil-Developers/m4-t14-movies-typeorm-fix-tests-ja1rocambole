import { Router } from "express";
import { createMovieController } from "../controllers";
import {
  validatedBodyMiddlewares,
  validatedMovieNameMiddlewares,
} from "../middlewares";
import { requestMovieSchema } from "../schemas";

export const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  validatedBodyMiddlewares(requestMovieSchema),
  validatedMovieNameMiddlewares,
  createMovieController
);
