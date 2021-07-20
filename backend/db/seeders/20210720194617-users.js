'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
      // Add altering commands here.
      // Return a promise to correctly handle asynchronicity.
      // Example:

      return queryInterface.bulkInsert('Users', [
        
        {firstName: 'demoUser-firstName', lastName: 'demoUser-lastName', email: 'demoUser@demo.com', isHost: false, hashedPassword: bcrypt.hashSync('password'), createdAt: new Date(), updatedAt: new Date()}, 
        {firstName: 'demoUserHost-firstName', lastName: 'demoUserHost-lastName', email: 'demoUserHost@demo.com', isHost: true, hashedPassword: bcrypt.hashSync('password'), createdAt: new Date(), updatedAt: new Date()}
      
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Users', null, {});
    
  }
};
