'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Reviews', [
        {userId: 1, 
          stayId: 1,
          content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
    createdAt: new Date(),
    updatedAt: new Date()}, 

        {userId: 2, 
          stayId: 1,
            content: `Vestibuurae; Donec ve molestie malesuada.
  
     in faucibus orci lras ultricies ligula sedpellentesque ne.`,
      createdAt: new Date(),
      updatedAt: new Date()}, 

      {userId: 1, 
        stayId: 1,
        content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
  createdAt: new Date(),
  updatedAt: new Date()}, 

  {userId: 1, 
    stayId: 1,
    content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 

{userId: 1, 
  stayId: 1,
  content: `Vestibulum araeporttitor volutpat. Curabitur arcu erat, accumsan id imperd.`,
createdAt: new Date(),
updatedAt: new Date()}, 


      
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};
