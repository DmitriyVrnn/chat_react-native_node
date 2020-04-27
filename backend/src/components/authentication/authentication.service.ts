import userModel from '../user/user.model';
import CreateUserDto from '../user/user.dto';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { TokenData } from './interfaces/token.interface';
import User from '../user/user.interface';
import { DataStoredInToken } from './interfaces/dataStoredInToken.interface';
import LoginDataDto from './loginData.dto';
import Errors from '../../exceptions/errors';

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
    const error = new Errors();
    const { email, password  } = loginData;
    const userFound = await this.user.findOne({ email });
    const tokenData = await this.createToken(userFound);
    const isMatchPassword = await this.comparePassword(password, userFound);
    if (isMatchPassword) {
      const cookie = this.createCookie(tokenData);
      return {
        cookie,
        id: userFound._id,
        email: userFound.email,
      };
    }
    return { error: error.getIncorrectPasswordOrPhoneNumberMessage() };
  }

  private comparePassword = async (enteredPassword: string, userFound: User): Promise<boolean> => {
    return await bcrypt.compare(
        enteredPassword,
        userFound.get('password', null, { getters: false }),
    );
  }
}
