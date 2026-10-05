import { z } from "zod";

export const alertBodySchema = z.object({
	body: z.object({
		displayName: z.string().min(4, "Incorrect displayname"),
		description: z.string().min(4, "Incorrect description"),
		priority: z.enum(["Low", "Medium", "High", "Critical"]),
		arena: z.enum(["North", "Center", "South"]),
		status: z.enum(["Handled", "Active"]),
		lon: z.number(),
		lat: z.number(),
	}),
});
