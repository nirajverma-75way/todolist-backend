
import { body } from 'express-validator';

export const createTask = [
    body('title').notEmpty().withMessage('Title is required').isString().withMessage('title must be a string'),
    body('description').notEmpty().withMessage('Description is required').isString().withMessage('description must be a string'),
    body('assign').isString().withMessage('Assign must be a string'),
];

export const updateTask = [
    body('title').notEmpty().withMessage('Title is required').isString().withMessage('title must be a string'),
    body('description').notEmpty().withMessage('Description is required').isString().withMessage('description must be a string'),
    body('assign').isString().withMessage('Assign must be a string'),

];

export const editTask = [
    body('title').isString().withMessage('title must be a string'),
    body('description').isString().withMessage('description must be a string'),
    body('assign').isString().withMessage('assign must be a string'),
    body('status').isString().withMessage('status must be a string'),
];
