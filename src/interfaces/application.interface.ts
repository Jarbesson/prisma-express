import { z } from "zod";
import { applicationCreateShema, applicationSchema } from "../schemas/application.schema";

type TApplication = z.infer<typeof applicationSchema>
type TApplicationCreate = z.infer<typeof applicationCreateShema>

export {TApplication, TApplicationCreate};