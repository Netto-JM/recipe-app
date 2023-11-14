import { Model, QueryInterface, DataTypes } from 'sequelize';
import IMealCategory from '../../interfaces/MealCategory/IMealCategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IMealCategory>>('meal_categories', {
        idMealCategory: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
          },
          strCategory: {
            type: DataTypes.STRING,
            allowNull: false,
          },
    });
  },
  down(queryInterface: QueryInterface) {
    return queryInterface.dropTable('meal_categories');
  },
};
