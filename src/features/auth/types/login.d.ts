import { z } from "zod";
import type { loginSchema } from "../schemas/login.shema";

export type LoginFormValues = z.infer<typeof loginSchema>;
