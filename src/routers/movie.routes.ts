import { Router } from "express";
import {
  createMovieController,
  deleteMoviesController,
  readMoviesController,
  updateMoviesController,
} from "../controllers";
import {
  validatedBodyMiddlewares,
  validatedMovieNameMiddlewares,
  ensureMovieexistsMiddlewares,
} from "../middlewares";
import { requestMovieSchema, movieUpdateSchema } from "../schemas";

export const movieRoutes: Router = Router();

movieRoutes.post(
  "",
  validatedBodyMiddlewares(requestMovieSchema),
  validatedMovieNameMiddlewares,
  createMovieController
);

movieRoutes.get("", readMoviesController);

movieRoutes.patch(
  "/:id",
  validatedBodyMiddlewares(movieUpdateSchema),
  ensureMovieexistsMiddlewares,
  validatedMovieNameMiddlewares,
  updateMoviesController
);

movieRoutes.delete(
  "/:id",
  ensureMovieexistsMiddlewares,
  deleteMoviesController
);
