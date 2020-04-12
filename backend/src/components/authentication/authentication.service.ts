import userModel from "../user/user.model";
import CreateUserDto from "../user/user.dto";
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import {tokenData} from "./interfaces/token.interface";
import User from "../user/user.interface";
import {DataStoredInToken} from "./interfaces/dataStoredInToken.interface";

export class AuthenticationService {
    public user = userModel;

    private createCookie = ({token, expiresIn}: tokenData) => {
        return `Authorization=${token}; HttpOnly; Max-Age=${expiresIn}`;
    };

    private createToken = (user: User): tokenData => {
        const expiresIn = 60 * 60;
        const secret = 'secret_key';
        const dataStoredInToken = {
            _id: user._id,
        };
        return {
            expiresIn,
            token: jwt.sign(dataStoredInToken, secret, {expiresIn}),
        };
    };

    public registration = async (userData: CreateUserDto) => {
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        const user = await this.user.create({
            ...userData,
            password: hashedPassword,
        });
        const tokenData = this.createToken(user);
        const cookie = this.createCookie(tokenData);
        return {
            cookie,
            user,
        };
    }
}