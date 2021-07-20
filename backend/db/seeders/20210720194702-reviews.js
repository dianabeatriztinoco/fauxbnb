'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      return queryInterface.bulkInsert('Reviews', [
        {reservationId: 1, 
          content: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.

    Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
    
    Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
    
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat.`,
    createdAt: new Date(),
    updatedAt: new Date()}, 

        { reservationId: 2, 
            content: `Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla porttitor accumsan tincidunt. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Nulla quis lorem ut libero malesuada feugiat. Curabitur aliquet quam id dui posuere blandit. Vivamus suscipit tortor eget felis porttitor volutpat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Donec sollicitudin molestie malesuada.
  
      Nulla quis lorem ut libero malesuada feugiat. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus. Vivamus suscipit tortor eget felis porttitor volutpat. Cras ultricies ligula sed magna dictum porta. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.
      
      Proin eget tortor risus. Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Cras ultricies ligula sed magna dictum porta. Curabitur non nulla sit amet nisl tempus convallis quis ac lectus. Quisque velit nisi, pretium ut lacinia in, elementum id enim. Nulla porttitor accumsan tincidunt. Proin eget tortor risus. Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec sollicitudin molestie malesuada. Pellentesque in ipsum id orci porta dapibus. Donec rutrum congue leo eget malesuada. Mauris blandit aliquet elit, eget tincidunt nibh pulvinar a. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.
      
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec sollicitudin molestie malesuada. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit neque, auctor sit amet aliquam vel, ullamcorper sit amet ligula. Donec rutrum congue leo eget malesuada. Cras ultricies ligula sed magna dictum porta. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi. Donec rutrum congue leo eget malesuada. Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Cras ultricies ligula sed magna dictum porta. Nulla quis lorem ut libero malesuada feugiat.`,
      createdAt: new Date(),
      updatedAt: new Date()}

      
      ], {});
    
  },

  down: (queryInterface, Sequelize) => {
    
      // Add reverting commands here.
      // Return a promise to correctly handle asynchronicity.

      // Example:
      return queryInterface.bulkDelete('Reviews', null, {});
    
  }
};

