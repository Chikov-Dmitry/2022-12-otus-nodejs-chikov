import AuthService from "../services/auth-service";

import express from "express";

class AuthController {
    async registration(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {

            const {name, email, password} = req.body;
            const userData = await AuthService.registration(name, email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async login(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const {email, password} = req.body;
            const userData = await AuthService.login(email, password);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

    async logout(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const token = await AuthService.logout(refreshToken);
            res.clearCookie('refreshToken');
            return res.json(token);
        } catch (e) {
            next(e);
        }
    }

    async refresh(req: express.Request, res: express.Response, next: express.NextFunction) {
        try {
            const {refreshToken} = req.cookies;
            const userData = await AuthService.refresh(refreshToken);
            res.cookie('refreshToken', userData.refreshToken, {maxAge: 30 * 24 * 60 * 60 * 1000, httpOnly: true})
            return res.json(userData);
        } catch (e) {
            next(e);
        }
    }

}


export default new AuthController()
