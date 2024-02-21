import { Router } from "express";
import { OpportunityControllers } from "../controllers/opportunity.controller";
import { applicationRouter } from "./application.routes";
import { validateBody } from "../middlewares/validateBody.middleware";
import { opportunityCreateSchema, opportunityUpdateSchema } from "../schemas/opportunity.schema";
import { isOpportunityIdValid } from "../middlewares/isOpportunityIdValid.middleware";
import { ValidateToken } from "../middlewares/validateToken.middleware";
import { container } from "tsyringe";
import { OpportunityServices } from "../services/opportunity.servicec";

container.registerSingleton("OppotunityServices", OpportunityServices);
const opportunityControllers = container.resolve(OpportunityControllers);

export const opportunityRouter = Router();

opportunityRouter.post("/",ValidateToken.execute, validateBody.execute(opportunityCreateSchema) ,(req,res) => opportunityControllers.create(req,res));
opportunityRouter.get("/",ValidateToken.execute, (req,res) => opportunityControllers.findMany(req,res));

opportunityRouter.use("/:id",isOpportunityIdValid.execute);
opportunityRouter.get("/:id",ValidateToken.execute, (req,res) => opportunityControllers.findOne(req,res));
opportunityRouter.patch("/:id",ValidateToken.execute, validateBody.execute(opportunityUpdateSchema) , (req,res) => opportunityControllers.update(req,res));
opportunityRouter.delete("/:id",ValidateToken.execute, (req,res) => opportunityControllers.delete(req,res));

opportunityRouter.use("/", applicationRouter);