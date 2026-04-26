'use strict';
module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define('account', {
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    age: DataTypes.INTEGER
  }, {
    underscored: true
  });

  account.associate = (models) => {
    // associations can be defined here
  };

  return account;
};