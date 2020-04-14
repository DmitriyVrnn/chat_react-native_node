import { Request, Response, NextFunction } from 'express';
import CreateUserDto from '../user/user.dto';
import { AuthenticationService } from './authentication.service';
import LoginDataDto from './loginData.dto';

export class AuthenticationController {
  private authenticationService = new AuthenticationService();

  constructor(authenticationService) {
    this.authenticationService = authenticationService;
  }

  public registration = async (req: Request, res: Response, next: NextFunction) => {
    const userData: CreateUserDto = req.body;
    try {
      const { cookie, user } = await this.authenticationService.registration(userData);
      res.setHeader('Set-Cookie', [cookie]);
      res.send(user);
    } catch (err) {
      next(err);
    }
  }

  public login = async (req: Request, res: Response, next: NextFunction) => {
    const loginData: LoginDataDto = req.body;
    try {
      const { userFound: { username }, token } = await this.authenticationService.login(loginData);
      res.setHeader('Set-Cookie', [token]);
      res.send({ username });
    } catch (err) {
      next(err);
    }
  }
}
