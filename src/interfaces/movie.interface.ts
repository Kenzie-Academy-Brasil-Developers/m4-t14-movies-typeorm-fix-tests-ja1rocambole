import { z } from "zod";
import {
  movieCreateSchema,
  movieUpdateSchema,
  requestMovieSchema,
} from "../schemas";

export type IMovie = z.infer<typeof movieCreateSchema>;
export type IMovieWithoutID = z.infer<typeof requestMovieSchema>;
export type IMovieUpdate = z.infer<typeof movieUpdateSchema>;
