'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reservation = sequelize.define('Reservations', {
    userId: DataTypes.INTEGER,
    stayId: DataTypes.INTEGER,
    startDate: DataTypes.INTEGER,
    endDate: DataTypes.INTEGER
  }, {});
  Reservation.associate = function(models) {
    Reservation.belongsTo(models.Stay, { foreignKey: 'stayId'})
    Reservation.hasOne(models.Review, { foreignKey: 'reservationId'})
    Reservation.belongsTo(model.User, { forgeinKey: 'userId'})
  };
  return Reservation;
};