import { z } from "zod";

export const movieCreateSchema = z.object({
  id: z.number(),
  name: z.string().max(50),
  description: z.string().nullable().optional(),
  duration: z.number().positive(),
  price: z.number().int(),
});

export const requestMovieSchema = movieCreateSchema.omit({ id: true });
