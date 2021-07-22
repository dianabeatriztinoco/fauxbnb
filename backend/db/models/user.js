'use strict';
const bcrypt = require('bcryptjs');
const { Validator } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User', 
    {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false 
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false 
    },

    email: {
      type: DataTypes.STRING,
      allowNull: false 
    },
    isHost: {
      type: DataTypes.TEXT,
    },
    hashedPassword: {
      type: DataTypes.STRING,
      allowNull: false },
  }, {});


  User.prototype.toSafeObject = function() { // remember, this cannot be an arrow function
    const { id, email } = this; // context will be the User instance
    return { id, email };
  };
  
  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

   User.getCurrentUserById = async function (id) {
    return await User.scope(null).findByPk(id);
   };

   User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope(null).findOne({
      where: {
        [Op.or]: {
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope(null).findByPk(user.id);
    }
  };
  
  User.signup = async function ({ firstName, lastName, email, isHost, password }) {
    
    const hashedPassword = bcrypt.hashSync(password);
    console.log(hashedPassword)
    const user = await User.create({
      firstName, 
      lastName,
      email,
      isHost,
      hashedPassword,
    });
    console.log(firstName)
    return await User.scope(null).findByPk(user.id);
  };
  
  User.associate = function(models) {
  //  User.belongsTo(models.Stay, {foreignKey: 'hostId'});
  //  User.hasOne(models.Reservation, {foreignKey: 'userId'})

  };
  return User;
};