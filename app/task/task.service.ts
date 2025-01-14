import { type ITask } from "./task.dto";
import TaskSchema from "./task.schema";

/**
 * Creates a new task in the database.
 * @param {ITask} data - The task data to create.
 * @returns {Promise<ITask>} The created task document.
 */
export const createTask = async (data: ITask) => {
    const result = await TaskSchema.create({ ...data });
    return result;
};

/**
 * Updates an existing task in the database.
 * @param {string} id - The ID of the task to update.
 * @param {ITask} data - The updated task data.
 * @returns {Promise<ITask | null>} The updated task document, or null if not found.
 */
export const updateTask = async (id: string, data: ITask) => {
    const result = await TaskSchema.findOneAndUpdate({ _id: id }, data, {
        new: true,
    });
    return result;
};

/**
 * Partially edits an existing task in the database.
 * @param {string} id - The ID of the task to edit.
 * @param {Partial<ITask>} data - The partial task data to update.
 * @returns {Promise<ITask | null>} The updated task document, or null if not found.
 */
export const editTask = async (id: string, data: Partial<ITask>) => {
    const result = await TaskSchema.findOneAndUpdate({ _id: id }, data);
    return result;
};

/**
 * Deletes a task from the database.
 * @param {string} id - The ID of the task to delete.
 * @returns {Promise<{ deletedCount: number }>} The result of the deletion operation.
 */
export const deleteTask = async (id: string) => {
    const result = await TaskSchema.deleteOne({ _id: id });
    return result;
};

/**
 * Retrieves a task by its ID.
 * @param {string} id - The ID of the task to retrieve.
 * @returns {Promise<ITask | null>} The task document, or null if not found.
 */
export const getTaskById = async (id: string) => {
    const result = await TaskSchema.findById(id).lean();
    return result;
};

/**
 * Retrieves all tasks from the database.
 * @returns {Promise<ITask[]>} An array of all task documents.
 */
export const getAllTask = async () => {
    const result = await TaskSchema.find({}).lean();
    return result;
};

/**
 * Retrieves a task assigned to a specific user.
 * @param {string} id - The ID of the user.
 * @returns {Promise<ITask | null>} The task document assigned to the user, or null if not found.
 */
export const getTaskByUser = async (id: string) => {
    const result = await TaskSchema.findOne({ assign: id }).lean();
    return result;
};

/**
 * Retrieves all task details from the database.
 * @returns {Promise<ITask[]>} An array of all task documents.
 */
export const getAllTaskDetail = async () => {
    const result = await TaskSchema.find({}).lean();
    return result;
};
