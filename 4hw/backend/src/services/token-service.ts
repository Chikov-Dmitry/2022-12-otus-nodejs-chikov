// const jwt = require('jsonwebtoken');
import ApiError from "../exceptions/api-error";

import {TokenModel} from "../db/token-model"

import jwt from 'jsonwebtoken'

import * as dotenv from 'dotenv'
import UserDto from "../dtos/user-dto";
import {throws} from "assert";

dotenv.config()

class TokenService {
    generateTokens(payload: UserDto) {

        const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_SECRET ? process.env.JWT_ACCESS_SECRET : 'jwt-secret-key', {expiresIn: '30m'})
        const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_SECRET ? process.env.JWT_REFRESH_SECRET : 'jwt-refresh-secret-key', {expiresIn: '30d'})
        return {
            accessToken,
            refreshToken
        }
    }

    validateAccessToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_ACCESS_SECRET ? process.env.JWT_ACCESS_SECRET : 'jwt-secret-key');
        } catch (e) {
            // ApiError.BadRequest('Не вылидный токен')
            return null
        }
    }

    validateRefreshToken(token: string) {
        try {
            return jwt.verify(token, process.env.JWT_REFRESH_SECRET ? process.env.JWT_REFRESH_SECRET : 'jwt-refresh-secret-key');
        } catch (e) {
            ApiError.BadRequest('Не вылидный токен')
        }
    }

    async saveToken(userId: string, refreshToken: string) {
        const tokenData = await TokenModel.findOne({user: userId})
        if (tokenData) {
            tokenData.refreshToken = refreshToken;
            return tokenData.save();
        }
        return await TokenModel.create({user: userId, refreshToken});
    }

    async removeToken(refreshToken: string) {
        return TokenModel.deleteOne({refreshToken});
    }

    async findToken(refreshToken: string) {
        return TokenModel.findOne({refreshToken});
    }

}

export default new TokenService()
