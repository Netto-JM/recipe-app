import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeMealCategory extends Model<InferAttributes<SequelizeMealCategory>,
InferCreationAttributes<SequelizeMealCategory>> {
  declare idMealCategory: CreationOptional<number>;
  declare strCategory: string;
}

SequelizeMealCategory.init({
  idMealCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'meal_categories',
  timestamps: false,
});

export default SequelizeMealCategory;
