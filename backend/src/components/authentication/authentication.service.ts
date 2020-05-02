import userModel from '../user/user.model';
import CreateUserDto from '../user/user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { TokenData } from './interfaces/token.interface';
import User from '../user/user.interface';
import { DataStoredInToken } from './interfaces/dataStoredInToken.interface';
import LoginDataDto from './loginData.dto';
import Error from '../../exceptions/errors';

export class AuthenticationService {
  private user = userModel;

  private createCookie = ({ token, expiresIn }: TokenData) => {
    return `Authorization=${token}; HttpOnly; Max-Age=${expiresIn}`;
  }

  private createToken = (user: User): TokenData => {
    const expiresIn = 60 * 60;
    const dataStoredInToken: DataStoredInToken = {
      _id: user._id,
    };
    return {
      expiresIn,
      token: jwt.sign(dataStoredInToken, process.env.JWT_SECRET_KEY, { expiresIn }),
    };
  }

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

  public login = async (loginData: LoginDataDto) => {
    const { email, password  } = loginData;
    try {
      const userFound = await this.user.findOne({ email });
      const tokenData = await this.createToken(userFound);
      return this.getUserData(await this.comparePassword(password, userFound), userFound, tokenData);
    } catch (e) {
      return { error: new Error('Password or email invalid') };
    }
  }

  private getUserData = (isPasswordMatch: boolean, user: User, token: TokenData) => {
    if (!isPasswordMatch) {
      return { error: new Error('Password invalid') };
    }
    const cookie = this.createCookie(token);
    return {
      cookie,
      id: user._id,
      email: user.email,
    };
  }

  private comparePassword = async (enteredPassword: string, userFound: User): Promise<boolean> => {
    return await bcrypt.compare(
        enteredPassword,
        userFound.get('password', null, { getters: false }),
    );
  }
}
