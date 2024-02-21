import { z } from "zod";


export const userSchema = z.object({
    id: z.number().positive(),
    name: z.string().min(1),
    email: z.string().email().min(1),
    password: z.string().min(8)
})

export const userRegisterBodySchema = userSchema.omit({ id:true});

export const userLoginBodySchema = userRegisterBodySchema.omit({ name:true });

export const useReturnSchema = userSchema.omit({ password: true})