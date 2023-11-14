import { Model, QueryInterface, DataTypes } from 'sequelize';
import IDrinkCategory from '../../interfaces/DrinkCategory/IDrinkCategory';

export default {
  up(queryInterface: QueryInterface) {
    return queryInterface.createTable<Model<IDrinkCategory>>('drink_categories', {
        idDrinkCategory: {
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
    return queryInterface.dropTable('drink_categories');
  },
};
