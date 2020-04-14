import { Router } from 'express';
import { AuthenticationController } from '../components/authentication/authentication.controller';
import { AuthenticationService } from '../components/authentication/authentication.service';

class AuthenticationRouter {

  public authenticationController = new AuthenticationController(new AuthenticationService);

  constructor(private router: Router) {
    this.setupRouter();
  }

  get authRouter() {
    return this.router;
  }

  private setupRouter() {
    this.router.route('/signup')
            .post(this.authenticationController.registration);
    this.router.route('/login')
        .post(this.authenticationController.login);
  }
}

export const authRouter = new AuthenticationRouter(Router()).authRouter;
