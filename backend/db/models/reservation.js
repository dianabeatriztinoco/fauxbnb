'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservation', {
    userId: DataTypes.INTEGER,
    stayId: DataTypes.INTEGER,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE
  }, {});
  Reservation.associate = function(models) {
    // Reservation.belongsTo(models.Stay, { foreignKey: 'stayId'})
    // Reservation.belongsTo(model.User, { forgeinKey: 'userId'})
  };
  return Reservation;
};