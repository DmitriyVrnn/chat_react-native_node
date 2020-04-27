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
      const { email, id , cookie, error } = await this.authenticationService.login(loginData);
      if (id) {
        res.setHeader('Set-Cookie', [cookie]);
        res.status(200)
                    .send({ id, email });
      }
      if (error) {
        res.status(404).send({ error });
      }
    } catch (err) {
      next(err);
    }
  }
}
