import * as taskService from "./task.service";
import * as userService from "../user/user.service";
import { createResponse } from "../common/helper/response.hepler";
import asyncHandler from "express-async-handler";
import { type Request, type Response } from 'express';

/**
 * Creates a new task.
 * @param {Request} req - The request object containing the task data in `req.body`.
 * @param {Response} res - The response object to send the result.
 */
export const createTask = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.createTask(req.body);
    res.send(createResponse(result, "Task created successfully"));
});

/**
 * Updates an existing task.
 * @param {Request} req - The request object containing task ID in `req.params.id` and updated data in `req.body`.
 * @param {Response} res - The response object to send the result.
 */
export const updateTask = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.updateTask(req.params.id, req.body);
    res.send(createResponse(result, "Task updated successfully"));
});

/**
 * Partially edits an existing task.
 * @param {Request} req - The request object containing task ID in `req.params.id` and partial data in `req.body`.
 * @param {Response} res - The response object to send the result.
 */
export const editTask = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.editTask(req.params.id, req.body);
    res.send(createResponse(result, "Task updated successfully"));
});

/**
 * Deletes a task.
 * @param {Request} req - The request object containing task ID in `req.params.id`.
 * @param {Response} res - The response object to send the result.
 */
export const deleteTask = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.deleteTask(req.params.id);
    res.send(createResponse(result, "Task deleted successfully"));
});

/**
 * Retrieves a task by its ID.
 * @param {Request} req - The request object containing task ID in `req.params.id`.
 * @param {Response} res - The response object to send the task details.
 */
export const getTaskById = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.getTaskById(req.params.id);
    res.send(createResponse(result));
});

/**
 * Retrieves all tasks.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object to send all tasks.
 */
export const getAllTask = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.getAllTask();
    res.send(createResponse(result));
});

/**
 * Retrieves tasks assigned to a specific user.
 * @param {Request} req - The request object containing user ID in `req.params.id`.
 * @param {Response} res - The response object to send the tasks.
 */
export const getTaskByUser = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.getTaskByUser(req.params.id);
    res.send(createResponse(result));
});

/**
 * Retrieves tasks assigned to the currently authenticated user.
 * @param {Request} req - The request object containing the authenticated user in `req.user`.
 * @param {Response} res - The response object to send the tasks.
 */
export const getMyTask = asyncHandler(async (req: Request, res: Response) => {
    if (req?.user?._id) {
        const result = await taskService.getTaskByUser(req?.user?._id);
        res.send(createResponse(result));
    }
    else
        res.send(createResponse({}));
});

/**
 * Retrieves all tasks with detailed user assignment.
 * @param {Request} req - The request object.
 * @param {Response} res - The response object to send all task details.
 */
export const getAllTaskDetail = asyncHandler(async (req: Request, res: Response) => {
    const result = await taskService.getAllTaskDetail();
    //Retrieve user detail of of the task 
    const detailResult = await Promise.all(
        result.map(async (data) => {
            if (data.assign) {
                return {
                    ...data,
                    assignedUser: await userService.getUserById(data.assign),
                };
            } else {
                return data;
            }
        })
    );
    res.send(createResponse(detailResult));
});
