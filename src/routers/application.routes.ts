import { Router } from "express";
import { ApplicationControllers } from "../controllers/application.controller";
import { validateBody } from "../middlewares/validateBody.middleware";
import { applicationCreateShema } from "../schemas/application.schema";
import { container } from "tsyringe";
import { ApplicationServices } from "../services/application.services";
import { ValidateToken } from "../middlewares/validateToken.middleware";


export const applicationRouter = Router();

container.registerSingleton("ApplicationServices",ApplicationServices)

const applicatonControllers = container.resolve(ApplicationControllers);

applicationRouter.post("/:id/applications",validateBody.execute(applicationCreateShema), (req,res) => applicatonControllers.create(req, res));
applicationRouter.get("/:id/applications", ValidateToken.execute, (req, res) => applicatonControllers.findMany(req, res));
