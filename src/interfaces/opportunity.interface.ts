import { z } from "zod";
import { opportunityCreateSchema, opportunityShemas, opportunityUpdateSchema } from "../schemas/opportunity.schema";

type TOpportunity = z.infer<typeof opportunityShemas>

type TOpportunityCreate = z.infer<typeof opportunityCreateSchema>

type TOpportunityUpdate = z.infer<typeof opportunityUpdateSchema>

export {TOpportunityCreate, TOpportunity, TOpportunityUpdate};