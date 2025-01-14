
import { type BaseSchema } from "../common/dto/base.dto";

export interface ITask extends BaseSchema {
        title: string;
        description: string;
        assign?: string;
        create: string;
        status: "PENDING" | "COMPLETE";
}
