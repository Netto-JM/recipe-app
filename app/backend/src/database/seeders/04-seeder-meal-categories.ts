import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'meal_categories',
      [
        {
          'idMealCategory': 1,
          'strCategory': 'Beef'
        },
        {
          'idMealCategory': 2,
          'strCategory': 'Breakfast'
        },
        {
          'idMealCategory': 3,
          'strCategory': 'Chicken'
        },
        {
          'idMealCategory': 4,
          'strCategory': 'Dessert'
        },
        {
          'idMealCategory': 5,
          'strCategory': 'Goat'
        },
        {
          'idMealCategory': 6,
          'strCategory': 'Lamb'
        },
        {
          'idMealCategory': 7,
          'strCategory': 'Miscellaneous'
        },
        {
          'idMealCategory': 8,
          'strCategory': 'Pasta'
        },
        {
          'idMealCategory': 9,
          'strCategory': 'Pork'
        },
        {
          'idMealCategory': 10,
          'strCategory': 'Seafood'
        },
        {
          'idMealCategory': 11,
          'strCategory': 'Side'
        },
        {
          'idMealCategory': 12,
          'strCategory': 'Starter'
        },
        {
          'idMealCategory': 13,
          'strCategory': 'Vegan'
        },
        {
          'idMealCategory': 14,
          'strCategory': 'Vegetarian'
        }
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('meal_categories', {});
  },
};
