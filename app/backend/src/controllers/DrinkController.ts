import { Request, Response } from 'express';
import DrinkService from '../services/DrinkService';

export default class DrinkController {
  constructor(
    private drinkService = new DrinkService(),
  ) { }

  public async getAllDrinks(req: Request, res: Response) {
    const serviceResponse = await this.drinkService.getAllDrinks();
    return res.status(200).json({'drinks' :serviceResponse.data});

  }

  public async getAllDrinkCategories(req: Request, res: Response) {
    const serviceResponse = await this.drinkService.getAllDrinkCategories();
    return res.status(200).json({'drinks': serviceResponse.data});
  }

  public async getDrinkById(req: Request, res: Response) {
    const { id } = req.params;
    const serviceResponse = await this.drinkService.getDrinkById(Number(id));
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'drinks': [serviceResponse.data]});
  }

  public async getDrinkByLetter(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.drinkService.getDrinkByLetter(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'drinks' :serviceResponse.data});
  }

  public async getDrinkByIngredients(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.drinkService.getDrinkByIngredients(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'drinks' :serviceResponse.data});
  }

  public async getDrinkByName(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.drinkService.getDrinkByName(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'drinks': serviceResponse.data});
  }

  public async getDrinkByCategory(req: Request, res: Response) {
    const { q } = req.query;

    const serviceResponse = await this.drinkService.getDrinkByCategory(q as string);
    if (serviceResponse.status !== 'SUCCESSFUL') {
      return res.status(404).json(serviceResponse.data);
    }
    res.status(200).json({'drinks': serviceResponse.data});
  }
}
