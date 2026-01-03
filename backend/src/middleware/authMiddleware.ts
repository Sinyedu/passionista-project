import { UnAuthorizedError } from "../errors/UnauthoriedError";
import { ForbiddenError } from "../errors/ForbiddenError";
import { AppError } from "../errors";
//TODO: idk yet
export function authMiddleware(requiredRole?: "admin" | "member"){
    return (req, res, next) => {
        const authHeader = req.headers.authorization;

        if (!authHeader) {
            throw new UnAuthorizedError("Missing Authorization header");
        }

        const token = authHeader.replace("Bearer ", "");

        if (!token) {
            throw new UnAuthorizedError("Invalid Token");
        }

        try {
            const user = verifyToken(token);
            req.user = user;

            if (requiredRole && user.role !== requiredRole) {
                throw new ForbiddenError("Insufficient Permissions");
            }

            next();
        } catch (err) {
            if (err instanceof AppError){
                throw err;
            }

            throw new UnAuthorizedError("Invalid or expired Token!")
        }
    }
}