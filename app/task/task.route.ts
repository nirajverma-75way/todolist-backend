
import { Router } from "express";
import { catchError } from "../common/middleware/cath-error.middleware";
import {roleAuth} from "../common/middleware/role-auth.middleware" 
import * as TaskController from "./task.controller";
import * as TaskValidator from "./task.validation";

const router = Router();

router
        .get("/", TaskController.getAllTask)
        .get("/detail",roleAuth("ADMIN"), TaskController.getAllTaskDetail)
        .get("/user/:id",roleAuth("ADMIN"),  TaskController.getTaskByUser)
        .get("/my",roleAuth("USER"), TaskController.getMyTask)
        .get("/:id", TaskController.getTaskById)
        .delete("/:id",roleAuth("ADMIN"), TaskController.deleteTask)
        .post("/", roleAuth("ADMIN"), TaskValidator.createTask, catchError, TaskController.createTask)
        .put("/:id", TaskValidator.updateTask, catchError, TaskController.updateTask)
        .patch("/:id", TaskValidator.editTask, catchError, TaskController.editTask)

export default router;

