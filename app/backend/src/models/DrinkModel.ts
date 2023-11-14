import SequelizeDrink from '../database/models/SequelizeDrink';
import IDrink from '../interfaces/Drink/IDrink';
import { IDrinkModel } from '../interfaces/Drink/IDrinkModel';

export default class DrinkModel implements IDrinkModel {
  private drinkSequelize = SequelizeDrink;

  async findAll(): Promise<IDrink[]> {
    const allDrinks = await this.drinkSequelize.findAll();

    return allDrinks;
  }

  async findById(id: IDrink['idDrink']): Promise<IDrink | null> {
    const drinkById = await this.drinkSequelize.findByPk(id);
    if (!drinkById) return null;
    return drinkById;
  }
}
