import { z } from "zod";

export const applicationSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().min(1).email(),
    linkedin: z.string().min(1).url(),
    opportunityId: z.number().positive()
});

export const applicationCreateShema = applicationSchema.omit({id: true, opportunityId: true});


