import { z } from "zod";
import { movieCreateSchema, requestMovieSchema } from "../schemas";

export type IMovie = z.infer<typeof movieCreateSchema>;
export type IMovieWithoutID = z.infer<typeof requestMovieSchema>;
