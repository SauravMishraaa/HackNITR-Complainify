import { NextFunction, Request, Response, Router } from 'express';
// import ThemeAController from '../controllers/ThemeAController';
import complaint from '../models/complaintSchema';
class ThemeARouter {
  private _router: Router = Router();
  // private _controller = ThemeAController;

  get router() {
    return this._router;
  }

  constructor() {
    this._configure();
  }

  /**
   * Connect routes to their matching controller endpoints.
   */
  private _configure() {
    this._router.get(
      '/posts',
      (req: Request, res: Response, next: NextFunction) => {
        complaint
          .find()
          .sort({ date: 1 })
          .then((data) => {
            res.status(200).json({ data, success: true });
          })
          .catch((err: Error) => {
            console.log(err);
            res.status(400).json({ data: err, success: false });
          });
      }
    );

    this._router.post(
      '/posts',
      async (req: Request, res: Response, next: NextFunction) => {
        const { title, description, image, lat, long, date } = req.body;
        await complaint
          .create({ title, description, image, lat, long, date })
          .then((data) => {
            res.status(200).json({ data: data, success: true });
          })
          .catch((err) => {
            console.log(err);
            res.status(400).json({ data: err, success: false });
          });
      }
    );
  }
}

export default new ThemeARouter().router;
