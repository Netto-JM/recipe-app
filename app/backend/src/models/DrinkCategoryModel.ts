import SequelizeDrinkCategory from '../database/models/SequelizeDrinkCategory';
import IDrinkCategory from '../interfaces/DrinkCategory/IDrinkCategory';
import { IDrinkCategoryModel } from '../interfaces/DrinkCategory/IDrinkCategoryModel';

export default class DrinkCategoryModel implements IDrinkCategoryModel {
  private drinkCategorySequelize = SequelizeDrinkCategory;

  async findAll(): Promise<IDrinkCategory[]> {
    const allDrinks = await this.drinkCategorySequelize.findAll();

    return allDrinks;
  }

  async findById(id: IDrinkCategory['idDrinkCategory']): Promise<IDrinkCategory | null> {
    const drinkCategoryById = await this.drinkCategorySequelize.findByPk(id);
    if (!drinkCategoryById) return null;
    return drinkCategoryById;
  }
}
