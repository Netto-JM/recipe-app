import SequelizeMeal from '../database/models/SequelizeMeal';
import IMeal from '../interfaces/Meal/IMeal';
import { IMealModel } from '../interfaces/Meal/IMealModel';

export default class MealModel implements IMealModel {
  private mealSequelize = SequelizeMeal;

  async findAll(): Promise<IMeal[]> {
    const allMeals = await this.mealSequelize.findAll();
    return allMeals;
  }

  async findById(id: IMeal['idMeal']): Promise<IMeal | null> {
    const mealById = await this.mealSequelize.findByPk(id);
    if (!mealById) return null;
    return mealById;
  }
}
