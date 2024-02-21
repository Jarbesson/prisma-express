import { Router } from "express";
import { container } from "tsyringe";
import { UserServices } from "../services/user.services";
import { UserControllers } from "../controllers/user.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { useReturnSchema, userLoginBodySchema } from "../schemas/user.schema";
import { ValidateToken } from "../middlewares/validateToken.middleware";

container.registerSingleton("UserServices", UserServices);
const userControllers = container.resolve(UserControllers);

export const userRouter = Router()

userRouter.post("/", validateBody.execute(useReturnSchema), (req,res) => userControllers.register(req,res));
userRouter.post("/login", validateBody.execute(userLoginBodySchema), (req,res) => userControllers.login(req,res));
userRouter.get("/" ,ValidateToken.execute, (req,res) => userControllers.getUser(req,res));