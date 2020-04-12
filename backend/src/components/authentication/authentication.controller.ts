import { Request, Response, NextFunction } from 'express';
import CreateUserDto from "../user/user.dto";
import {AuthenticationService} from "./authentication.service";

export class AuthenticationController {
    public authenticationService = new AuthenticationService();

    constructor(authenticationService) {
        this.authenticationService = authenticationService;
    }

    registration = async (req: Request, res: Response, next: NextFunction) => {
        const userData: CreateUserDto = req.body;
        try {
            const { cookie, user } = await this.authenticationService.registration(userData);
            res.setHeader('Set-Cookie', [cookie]);
            res.send(user);
        } catch (err) {
            next(err)
        }
    }
}