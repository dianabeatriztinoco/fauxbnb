'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Reservations', [
        {userId: 1, stayId: 1, startDate: new Date('2021-09-03'), endDate: new Date('2021-09-10'), createdAt: new Date(),updatedAt: new Date()},
        {userId: 1, stayId: 2, startDate: new Date('2021-10-03'), endDate: new Date('2021-12-10'), createdAt: new Date(),updatedAt: new Date()}

      
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
 
      return queryInterface.bulkDelete('Reservations', null, {});
    
  }
};
