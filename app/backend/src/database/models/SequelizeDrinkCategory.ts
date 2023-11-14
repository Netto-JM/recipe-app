import {
  DataTypes,
  Model,
  InferAttributes,
  InferCreationAttributes,
  CreationOptional,
} from 'sequelize';
import db from '.';

class SequelizeDrinkCategory extends Model<InferAttributes<SequelizeDrinkCategory>,
InferCreationAttributes<SequelizeDrinkCategory>> {
  declare idDrinkCategory: CreationOptional<number>;
  declare strCategory: string;
}

SequelizeDrinkCategory.init({
  idDrinkCategory: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  strCategory: { type: DataTypes.STRING, allowNull: false },
}, {
  sequelize: db,
  modelName: 'drink_categories',
  timestamps: false,
});

export default SequelizeDrinkCategory;
