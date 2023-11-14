import SequelizeMealCategory from '../database/models/SequelizeMealCategory';
import IMealCategory from '../interfaces/MealCategory/IMealCategory';
import { IMealCategoryModel } from '../interfaces/MealCategory/IMealCategoryModel';

export default class MealCategoryModel implements IMealCategoryModel {
  private mealCategorySequelize = SequelizeMealCategory;

  async findAll(): Promise<IMealCategory[]> {
    const allMeals = await this.mealCategorySequelize.findAll();

    return allMeals;
  }

  async findById(id: IMealCategory['idMealCategory']): Promise<IMealCategory | null> {
    const mealCategoryById = await this.mealCategorySequelize.findByPk(id);
    if (!mealCategoryById) return null;
    return mealCategoryById;
  }
}
