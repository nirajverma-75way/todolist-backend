
import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import * as userController from "./user.controller";
import * as userValidator from "./user.validation";
import {roleAuth} from "../common/middleware/role-auth.middleware" 
const router = Router();

router
        .get("/",roleAuth("ADMIN"), userController.getAllUser)
        .get("/:id",roleAuth("ADMIN"), userController.getUserById)
        .delete("/:id",roleAuth("ADMIN"), userController.deleteUser)
        .post("/login", catchError, userController.login)
        .post("/",roleAuth("ADMIN"), userValidator.createUser, catchError, userController.createUser)
        .put("/:id",roleAuth("ADMIN"), userValidator.updateUser, catchError, userController.updateUser)
        .patch("/:id",roleAuth("ADMIN"), userValidator.editUser, catchError, userController.editUser)

export default router;

