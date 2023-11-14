import { Op } from 'sequelize';
import { ServiceResponse } from '../interfaces/ServiceResponse';
import { IMealModel } from '../interfaces/Meal/IMealModel';
import { IMealCategoryModel } from '../interfaces/MealCategory/IMealCategoryModel';
import IMeal from '../interfaces/Meal/IMeal';
import IMealCategory from '../interfaces/MealCategory/IMealCategory';
import MealModel from '../models/MealModel';
import MealCategoryModel from '../models/MealCategoryModel';
import SequelizeMeal from '../database/models/SequelizeMeal';

const MEAL_NOT_FOUND = 'Meal not found';

export default class MealService {
  constructor(
    private mealSequelize = SequelizeMeal,
    private mealModel: IMealModel = new MealModel(),
    private mealCategoryModel: IMealCategoryModel = new MealCategoryModel(),
  ) { }

  public async getAllMeals(): Promise<ServiceResponse<IMeal[]>> {
    const allMeals = await this.mealModel.findAll();
    return { status: 'SUCCESSFUL', data: allMeals };
  }

  public async getAllMealCategories(): Promise<ServiceResponse<IMealCategory[]>> {
    const allMealCategories = await this.mealCategoryModel.findAll();
    return { status: 'SUCCESSFUL', data: allMealCategories };
  }

  public async getMealById(id: number): Promise<ServiceResponse<IMeal>> {
    const meal = await this.mealModel.findById(id);
    if (!meal) {
      return { status: 'NOT_FOUND', data: { message: `Meal ${id} not found` } };
    }

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getMealByCategory(q: string): Promise<ServiceResponse<IMeal | IMeal[]>> {
    const meal = await this.mealSequelize.findAll({ where: { strCategory: q } });
    if (meal.length === 0) {
      return { status: 'NOT_FOUND', data: { message: MEAL_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getMealByLetter(q: string): Promise<ServiceResponse<IMeal | IMeal[]>> {
    const meal = await this.mealSequelize.findAll({ where: { strMeal: {
      [Op.like]: `${q}%`,
    } } });
    if (!meal) {
      return { status: 'NOT_FOUND', data: { message: MEAL_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getMealByName(q: string): Promise<ServiceResponse<IMeal | IMeal[]>> {
    const meal = await this.mealSequelize.findAll({ where: { strMeal: {
      [Op.like]: `%${q}%`,
    } } });
    if (!meal) {
      return { status: 'NOT_FOUND', data: { message: MEAL_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data: meal };
  }

  public async getMealByIngredients(q: string): Promise<ServiceResponse<IMeal | IMeal[]>> {
    const meal = await this.mealSequelize.findAll({ where: { [Op.or]: [
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
    if (!meal) {
      return { status: 'NOT_FOUND', data: { message: MEAL_NOT_FOUND } };
    }

    return { status: 'SUCCESSFUL', data: meal };
  }
}
