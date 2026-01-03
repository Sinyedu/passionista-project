import { AppError } from "./AppError";

export class UnAuthorizedError extends AppError {
    constructor(message = "Unauthorized"){
        super(message, 401, "UNAUTHORIZED");
    }
}