'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Images', {
    url: DataTypes.STRING,
    stayId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    // Image.belongsTo(models.Stays, { foreignKey: 'stayId'});
  };
  return Image;
};