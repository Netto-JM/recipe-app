import { Request, Router, Response } from 'express';
import MealController from '../controllers/MealController';

const mealController = new MealController();
const mealRouter = Router();

mealRouter.get(
  '/meals',
  (req: Request, res: Response) => mealController.getAllMeals(req, res),
);
mealRouter.get(
  '/meals/categories',
  (req: Request, res: Response) => mealController.getAllMealCategories(req, res),
);
mealRouter.get(
  '/meals/filter',
  (req: Request, res: Response) => mealController.getMealByCategory(req, res),
);
mealRouter.get(
  '/meals/letter',
  (req: Request, res: Response) => mealController.getMealByLetter(req, res),
);
mealRouter.get(
  '/meals/ingredients',
  (req: Request, res: Response) => mealController.getMealByIngredients(req, res),
);
mealRouter.get(
  '/meals/name',
  (req: Request, res: Response) => mealController.getMealByName(req, res),
);
mealRouter.get(
  '/meals/:id',
  (req: Request, res: Response) => mealController.getMealById(req, res),
);

export default mealRouter;
