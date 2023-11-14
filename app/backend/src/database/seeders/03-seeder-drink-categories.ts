import { QueryInterface } from 'sequelize';

export default {
  up: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkInsert(
      'drink_categories',
      [
        {
          'idDrinkCategory': 1,
          'strCategory': 'Ordinary Drink'
        },
        {
          'idDrinkCategory': 2,
          'strCategory': 'Cocktail'
        },
        {
          'idDrinkCategory': 3,
          'strCategory': 'Shake'
        },
        {
          'idDrinkCategory': 4,
          'strCategory': 'Other / Unknown'
        },
        {
          'idDrinkCategory': 5,
          'strCategory': 'Cocoa'
        },
        {
          'idDrinkCategory': 6,
          'strCategory': 'Shot'
        },
        {
          'idDrinkCategory': 7,
          'strCategory': 'Coffee / Tea'
        },
        {
          'idDrinkCategory': 8,
          'strCategory': 'Homemade Liqueur'
        },
        {
          'idDrinkCategory': 9,
          'strCategory': 'Punch / Party Drink'
        },
        {
          'idDrinkCategory': 10,
          'strCategory': 'Beer'
        },
        {
          'idDrinkCategory': 11,
          'strCategory': 'Soft Drink'
        }
      ],
      {},
    );
  },

  down: async (queryInterface: QueryInterface) => {
    await queryInterface.bulkDelete('drink_categories', {});
  },
};
