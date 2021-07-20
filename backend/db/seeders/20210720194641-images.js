'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Images', [
        {url: '/stays/1_activity_2.jpg', stayId: 1, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/1_activity.jpg', stayId: 1, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/1_bed.jpg', stayId: 1, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/1_eating.jpg', stayId: 1, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/1_main.jpg', stayId: 1, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/1_pool.jpg', stayId: 1, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/1_spa.jpg', stayId: 1, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/2_activity_2.jpg', stayId: 2, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/2_activity.jpg', stayId: 2, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/2_bed.jpg', stayId: 2, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/2_eating.jpg', stayId: 2, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/2_main.jpg', stayId: 2, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/2_pool.jpg', stayId: 2, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/2_spa.jpg', stayId: 2, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/3_activity_3.jpg', stayId: 3, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/3_activity.jpg', stayId: 3, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/3_bed.jpg', stayId: 3, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/3_eating.jpg', stayId: 3, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/3_main.jpg', stayId: 3, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/3_pool.jpg', stayId: 3, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/3_spa.jpg', stayId: 3, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/4_activity.jpg', stayId: 4, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/4_bed.jpg', stayId: 4, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/4_eating.jpg', stayId: 4, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/4_main.jpg', stayId: 4, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/4_pool.jpg', stayId: 4, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/4_spa.jpg', stayId: 4, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/5_activity.jpg', stayId: 5, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/5_bed.jpg', stayId: 5, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/5_eating.jpg', stayId: 5, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/5_main.jpg', stayId: 5, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/5_pool.jpg', stayId: 5, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/5_spa.jpg', stayId: 5, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/6_activity.jpg', stayId: 6, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/6_bed.jpg', stayId: 6, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/6_eating.jpg', stayId: 6, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/6_main.jpg', stayId: 6, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/6_pool.jpg', stayId: 6, createdAt: new Date(), updatedAt: new Date()},
        {url: '/stays/6_spa.jpg', stayId: 6, createdAt: new Date(), updatedAt: new Date()},
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Images', null, {});
    
  }
};
