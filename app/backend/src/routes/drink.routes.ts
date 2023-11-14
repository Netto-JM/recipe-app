import { Request, Router, Response } from 'express';
import DrinkController from '../controllers/DrinkController';

const drinkController = new DrinkController();
const drinkRouter = Router();

drinkRouter.get(
  '/drinks',
  (req: Request, res: Response) => drinkController.getAllDrinks(req, res),
);
drinkRouter.get(
  '/drinks/categories',
  (req: Request, res: Response) => drinkController.getAllDrinkCategories(req, res),
);
drinkRouter.get(
  '/drinks/filter',
  (req: Request, res: Response) => drinkController.getDrinkByCategory(req, res),
);
drinkRouter.get(
  '/drinks/letter',
  (req: Request, res: Response) => drinkController.getDrinkByLetter(req, res),
);
drinkRouter.get(
  '/drinks/ingredients',
  (req: Request, res: Response) => drinkController.getDrinkByIngredients(req, res),
);
drinkRouter.get(
  '/drinks/name',
  (req: Request, res: Response) => drinkController.getDrinkByName(req, res),
);
drinkRouter.get(
  '/drinks/:id',
  (req: Request, res: Response) => drinkController.getDrinkById(req, res),
);

export default drinkRouter;
