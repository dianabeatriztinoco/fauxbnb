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
    const { id, firstName, lastName, email, isHost } = this; // context will be the User instance
    return { id, firstName, lastName, email, isHost};
  };

  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

   User.getCurrentUserById = async function (id) {
    return await User.scope(null).findByPk(id);
   };

   User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.findOne({
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

  // User.loginDemo = async function ({email}) {
  //    await User.findOne({where:{
  //     email: 'demoUser@demo.com'
  //   }})
  //   return User
  // }

   


  
  User.signup = async function ({ firstName, lastName, email, isHost, password }) {
    
    const hashedPassword = bcrypt.hashSync(password);
    
    const user = await User.create({
      firstName, 
      lastName,
      email,
      isHost,
      hashedPassword,
    });

    return await User.scope(null).findByPk(user.id);
  };
  
  User.associate = function(models) {
  //  User.belongsTo(models.Stay, {foreignKey: 'hostId'});
   User.hasOne(models.Reservation, {foreignKey: 'userId'})

  };
  return User;
};