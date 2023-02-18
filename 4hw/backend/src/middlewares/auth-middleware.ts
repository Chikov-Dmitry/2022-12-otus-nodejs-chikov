import ApiError from "../exceptions/api-error";
import TokenService from "../services/token-service";
import {NextFunction, Request, Response} from "express";

export default function (req:Request, res:Response, next:NextFunction) {
    try {
        const authorizationHeader = req.headers.authorization;
        if (!authorizationHeader) {
            return next(ApiError.UnauthorizedError());
        }

        const accessToken = authorizationHeader.split(' ')[1];

        if (!accessToken) {
            return next(ApiError.UnauthorizedError());
        }

        const userData = TokenService.validateAccessToken(accessToken);

        if (!userData) {
            return next(ApiError.UnauthorizedError());
        }

        next();
    } catch (e) {
        return next(ApiError.UnauthorizedError());
    }
};
