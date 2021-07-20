'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Reservations', [
        {userId: 1, stayId: 1, startDate: new Date('2021-09-03'), endDate: new Date('2021-09-10')},
        {userId: 1, stayId: 2, startDate: new Date('2021-10-03'), endDate: new Date('2021-12-10')},

      
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
 
      return queryInterface.bulkDelete('Reservations', null, {});
    
  }
};
