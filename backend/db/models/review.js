'use strict';
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define('Reviews', {
    userId: DataTypes.INTEGER,
    stayId: DataTypes.INTEGER, 
    content: DataTypes.STRING
  }, {});
  Review.associate = function(models) {

  //  Review.belongsTo(models.User, { foreignKey: 'userId'})
  //  Review.belongsTo(model.Stay, {foreignKey: 'stayId'})
  };
  return Review;
};