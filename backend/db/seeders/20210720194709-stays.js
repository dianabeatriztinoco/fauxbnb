'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {

      return queryInterface.bulkInsert('Stays', [
        {
          hostId: 2, 
          availability: true, 
          address: '123 Main st', 
          city: 'Dogwood', 
          state: 'California', 
          country: 'France', 
          price: '$300/night', 
          description: 'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          createdAt: new Date(),
          updatedAt: new Date()
        }, 
        {
          hostId: 2, 
          availability: true, 
          address: '123 Main st', 
          city: 'Wagglewood', 
          state: 'Louisiana', 
          country: 'USA', 
          price: '$150/night', 
          description: 'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2, 
          availability: true, 
          address: '123 Whiskers st', 
          city: 'Paws', 
          state: 'Texas', 
          country: 'United Kingdon', 
          price: '$500/night', 
          description: 'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2, 
          availability: true, 
          address: '123 Main st', 
          city: 'Dog', 
          state: 'Virginia', 
          country: 'Mexico', 
          price: '$700/night', 
          description: 'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2, 
          availability: true, 
          address: '123 Cats Drool st', 
          city: 'Puppy Power', 
          state: 'California', 
          country: 'Germany', 
          price: '$400/night', 
          description: 'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          hostId: 2, 
          availability: true, 
          address: '123 Main st', 
          city: 'Dogwood', 
          state: 'California', 
          country: 'France', 
          price: '$300/night', 
          description: 'Why do we use it? It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).',
          createdAt: new Date(),
          updatedAt: new Date()
        }

      
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      
      return queryInterface.bulkDelete('Stays', null, {});
    
  }
};
