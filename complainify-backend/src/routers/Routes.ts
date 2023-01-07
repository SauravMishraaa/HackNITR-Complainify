import { Router } from 'express';
import postDetailsRouter from './detailsRouter';

class MasterRouter {
  private _router: Router = Router();
  private _subrouterA = postDetailsRouter;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching routers.
   */
  private _configure() {
    this._router.use('/', this._subrouterA);
  }
}

export default new MasterRouter().router;
