'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Review', {
    userId: DataTypes.INTEGER,
    stayId: DataTypes.INTEGER, 
    content: DataTypes.STRING
  }, {});
  Review.associate = function(models) {

   Review.belongsTo(models.User, { foreignKey: 'userId'})
   Review.belongsTo(models.Stay, {foreignKey: 'stayId'})
  };
  return Review;
};