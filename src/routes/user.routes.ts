
import { Router } from "express";
import UserController from "../controller/UserController";



const routes = Router();

routes.post("/", UserController.add);
routes.get("/",UserController.getAll);


export default routes;