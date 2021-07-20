'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'Users', 
    {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    hostId: DataTypes.BOOLEAN,
    hashedPassword: DataTypes.STRING
  }, {});
  User.associate = function(models) {
   User.belongsTo(models.Stays, {foreignKey: 'hostId'});
   User.hasOne(models.Reservation, {foreignKey: 'userId'})


  };
  return User;
};