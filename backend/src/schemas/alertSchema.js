import { z } from "zod";

export const alertBodySchema = z.object({
	body: z.object({
		displayName: z.string().min(4, "Incorrect displayname"),
		description: z.string().min(4, "Incorrect description"),
		priority: z.string(),
		arena: z.string(),
		status: z.string(),
		lon: z.number(),
		lat: z.number(),
	}),
});
