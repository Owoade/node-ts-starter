import { Router } from "express";
import user_controller from "./controller";

const user_router = Router();

user_router.post( "/sign-in", user_controller.sign_in );

user_router.post( "/sign-up", user_controller.sign_up );

export default user_router;
