import { Request, Response } from 'express';
import MealService from '../services/MealService';

export default class MealController {
  constructor(
    private mealService = new MealService(),
  ) { }

  public async getAllMeals(req: Request, res: Response) {
    const serviceResponse = await this.mealService.getAllMeals();
    return res.status(200).json({'meals': serviceResponse.data});
  }

  public async getAllMealCategories(req: Request, res: Response) {
    const serviceResponse = await this.mealService.getAllMealCategories();
    return res.status(200).json({'meals': serviceResponse.data});
  }

  public async getMealById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.mealService.getMealById(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'meals': [serviceResponse.data]});
  }

  public async getMealByLetter(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.mealService.getMealByLetter(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'meals': serviceResponse.data});
  }

  public async getMealByIngredients(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.mealService.getMealByIngredients(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'meals': serviceResponse.data});
  }

  public async getMealByName(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.mealService.getMealByName(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'meals': serviceResponse.data});
  }

  public async getMealByCategory(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.mealService.getMealByCategory(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'meals': serviceResponse.data});
  }
}
