import { Request, Response } from 'express';

export function get404(req: Request, res: Response) {
  res.render('404');
}
