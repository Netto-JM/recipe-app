import { Op } from 'sequelize';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IDrinkModel } from '../interfaces/Drink/IDrinkModel';
import { IDrinkCategoryModel } from '../interfaces/DrinkCategory/IDrinkCategoryModel';
import IDrink from '../interfaces/Drink/IDrink';
import IDrinkCategory from '../interfaces/DrinkCategory/IDrinkCategory';
import DrinkModel from '../models/DrinkModel';
import DrinkCategoryModel from '../models/DrinkCategoryModel';
import SequelizeDrink from '../database/models/SequelizeDrink';

const DRINK_NOT_FOUND = 'Drink not Found';

export default class DrinkService {
  constructor(
    private drinkSequelize = SequelizeDrink,
    private drinkModel: IDrinkModel = new DrinkModel(),
    private drinkCategoryModel: IDrinkCategoryModel = new DrinkCategoryModel(),
  ) { }

  public async getAllDrinks(): Promise<ServiceResponse<IDrink[]>> {
    const allDrinks = await this.drinkModel.findAll();
    return { status: 'SUCCESSFUL', data: allDrinks };
  }

  public async getAllDrinkCategories(): Promise<ServiceResponse<IDrinkCategory[]>> {
    const allDrinkCategories = await this.drinkCategoryModel.findAll();
    return { status: 'SUCCESSFUL', data: allDrinkCategories };
  }

  public async getDrinkById(id: number): Promise<ServiceResponse<IDrink>> {
    const drink = await this.drinkModel.findById(id);
    if (!drink) {
      return { status: 'NOT_FOUND', data: { message: `Drink ${id} not found` } };
    }

    return { status: 'SUCCESSFUL', data: drink };
  }

  public async getDrinkByLetter(q: string): Promise<ServiceResponse<IDrink | IDrink[]>> {
    const drink = await this.drinkSequelize.findAll({ where: { strDrink: {
      [Op.like]: `${q}%`,
    } } });
    if (!drink) {
      return { status: 'NOT_FOUND', data: { message: DRINK_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data:  drink };
  }

  public async getDrinkByName(q: string): Promise<ServiceResponse<IDrink | IDrink[]>> {
    const drink = await this.drinkSequelize.findAll({ where: { strDrink: {
      [Op.like]: `%${q}%`,
    } } });
    if (!drink) {
      return { status: 'NOT_FOUND', data: { message: DRINK_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data: drink };
  }

  public async getDrinkByCategory(q: string): Promise<ServiceResponse<IDrink | IDrink[]>> {
    const drink = await this.drinkSequelize.findAll({ where: { strCategory: q } });
    if (drink.length === 0) {
      return { status: 'NOT_FOUND', data: { message: DRINK_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data: drink };
  }

  public async getDrinkByIngredients(q: string): Promise<ServiceResponse<IDrink | IDrink[]>> {
    const drink = await this.drinkSequelize.findAll({ where: { [Op.or]: [
      { strIngredient1: { [Op.like]: `%${q}%` } }, { strIngredient2: { [Op.like]: `%${q}%` } },
      { strIngredient3: { [Op.like]: `%${q}%` } }, { strIngredient4: { [Op.like]: `%${q}%` } },
      { strIngredient5: { [Op.like]: `%${q}%` } }, { strIngredient6: { [Op.like]: `%${q}%` } },
      { strIngredient7: { [Op.like]: `%${q}%` } }, { strIngredient8: { [Op.like]: `%${q}%` } },
      { strIngredient9: { [Op.like]: `%${q}%` } }, { strIngredient10: { [Op.like]: `%${q}%` } },
      { strIngredient11: { [Op.like]: `%${q}%` } }, { strIngredient12: { [Op.like]: `%${q}%` } },
      { strIngredient13: { [Op.like]: `%${q}%` } }, { strIngredient14: { [Op.like]: `%${q}%` } },
      { strIngredient15: { [Op.like]: `%${q}%` } }, { strIngredient16: { [Op.like]: `%${q}%` } },
      { strIngredient17: { [Op.like]: `%${q}%` } }, { strIngredient18: { [Op.like]: `%${q}%` } },
      { strIngredient19: { [Op.like]: `%${q}%` } }, { strIngredient20: { [Op.like]: `%${q}%` } },
    ] } });
    if (!drink) {
      return { status: 'NOT_FOUND', data: { message: DRINK_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data: drink };
  }
}
