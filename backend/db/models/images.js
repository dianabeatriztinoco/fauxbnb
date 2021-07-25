'use strict';
module.exports = (sequelize, DataTypes) => {
  const Image = sequelize.define('Image', {
    url: DataTypes.STRING,
    stayId: DataTypes.INTEGER
  }, {});
  Image.associate = function(models) {
    
  };
  return Image;
};