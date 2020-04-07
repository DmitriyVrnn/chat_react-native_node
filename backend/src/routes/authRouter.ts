import {Response, Request, Router} from 'express';

class AuthRouter {
    constructor(private router: Router) {
        this.setupRouter();
    }

    get authRouter(){
        return this.router;
    }

    private setupRouter(){
        this.router.route('/login')
            .get((req: Request, res: Response) => {
                res.status(200).send({message: 'Login'})
            })
    }
}

export const authRouter = new AuthRouter(Router()).authRouter;