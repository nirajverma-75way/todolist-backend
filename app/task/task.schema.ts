
import mongoose from "mongoose";
import { type ITask } from "./task.dto";

const Schema = mongoose.Schema;

const TaskSchema = new Schema<ITask>({
        title: { type: String, required: true },
        description: { type: String, required: true },
        assign: { type: String, required: false },
        create: { type: String, required: true },
        status: { type: String, required: true, enum: ["PENDING", "COMPLETE"], default: "PENDING" },
}, { timestamps: true });


export default mongoose.model<ITask>("task", TaskSchema);
