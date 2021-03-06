'use strict';
module.exports = (sequelize, DataTypes) => {
  const Stay = sequelize.define('Stay', {
    hostId: DataTypes.INTEGER,
    availability: DataTypes.BOOLEAN,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    state: DataTypes.STRING,
    country: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    description: DataTypes.TEXT
  }, {});
 
  Stay.associate = function(models) {
    Stay.hasMany(models.Image, { foreignKey: 'stayId'})
    Stay.hasOne(models.Reservation, { foreignKey: 'stayId'})
    // Stay.hasMany(models.Review, { foreignKey: 'reviewId'})
  };

  return Stay;
};