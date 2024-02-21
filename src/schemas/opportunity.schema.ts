

import { z } from "zod";

export const opportunityShemas = z.object({
    id: z.number().positive(),
    title: z.string().min(1),
    description: z.string().min(1),
    userId: z.number().positive()
})

export const opportunityCreateSchema = opportunityShemas.omit({id: true});

export const opportunityUpdateSchema = opportunityCreateSchema.partial();