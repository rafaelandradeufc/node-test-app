import { Router } from "express";
import user from "./user.routes";

const routes = Router();

// Get routes
routes.use("/user", user);

export default routes;