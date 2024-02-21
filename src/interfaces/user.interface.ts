import { z } from "zod";
import { useReturnSchema, userLoginBodySchema, userRegisterBodySchema, userSchema } from "../schemas/user.schema";

type TUser = z.infer<typeof userSchema>;

type TUserRegisterBody = z.infer<typeof userRegisterBodySchema>;

type TUserLoginBody = z.infer<typeof userLoginBodySchema>;

type TUserReturn = z.infer<typeof useReturnSchema>;

type TUserLoginReturn = {
    acessToken: string;
    user: TUserReturn
}

export {TUser,TUserRegisterBody,TUserLoginBody,TUserReturn,TUserLoginReturn}