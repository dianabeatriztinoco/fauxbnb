'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Reviews', {
    reservationId: DataTypes.INTEGER, 
    content: DataTypes.STRING
  }, {});
  Review.associate = function(models) {

   Review.belongsTo(models.Reservation, { foreignKey: 'reservationsId'})
   
  };
  return Review;
};