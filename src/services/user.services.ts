import { injectable } from "tsyringe";
import { TUserLoginBody, TUserLoginReturn, TUserRegisterBody, TUserReturn } from "../interfaces/user.interface";
import bcrypt from "bcrypt";
import { prisma } from "../database/prisma";
import { useReturnSchema } from "../schemas/user.schema";
import { AppError } from "../errors/appError";
import  jwt from "jsonwebtoken";

@injectable()
export class UserServices{
   async register(body: TUserRegisterBody):Promise<TUserReturn>{
        const hashPassword = await bcrypt.hash(body.password, 10);

        const newUser = {
            ...body,
            password: hashPassword
        }

        const user = await prisma.user.create({ data: newUser });

        return useReturnSchema.parse(user);
    }


   async login(body: TUserLoginBody):Promise<TUserLoginReturn>{
        const user = await prisma.user.findFirst({ where: { email: body.email }});

        if (!user) {
            throw new AppError(404, "User not registered");
        }

        const compare = await bcrypt.compare(body.password, user.password);

        if (!compare) {
            throw new AppError(403, "E-mail and password doesn't match");
        }

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string);

        return  { acessToken: token, user: useReturnSchema.parse(user)}
    }

   async getUSer(id: number):Promise<TUserReturn>{
       const user = await prisma.user.findFirst({where: {id}});
       
       return useReturnSchema.parse(user);
    }

}