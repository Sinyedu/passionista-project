
import { AppError } from "./AppError";

export type ValidationIssue = {
    field?: string; 
    message: string;
};

export class ValidationError extends AppError {
    public readonly issues: ValidationIssue[];

constructor(
    message = "Validation Failed",
    issues: ValidationIssue[] = []
) {
    super(message, 422, "VALIDATION_ERROR");

    this.issues = issues;
    }
}
