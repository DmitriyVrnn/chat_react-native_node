import { Response, Request, Router } from 'express';
import { authRouter } from './authentication.router';

export interface IRoute {
  url: string;
  router: Router;
}

export class ApiRouter {
  constructor(private router: Router, private routes: IRoute[]) {
    this.setupApiRoutes(routes);
  }

  get apiRouter() {
    return this.router;
  }

  private addApiRoute(url: string, router: Router) {
    this.router.use(url, router);
  }

  public setupApiRoutes(routes: IRoute[]): void {
    routes.forEach(({ url, router }) => {
      this.addApiRoute(url, router);
    });
  }
}

const routes: IRoute[] = [
    { url: '/auth/', router: authRouter },
];

export const apiRouter = new ApiRouter(Router(), routes).apiRouter;
