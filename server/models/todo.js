"use strict";
module.exports = (sequelize, DataTypes) => {
  const Todo = sequelize.define(
    "Todo",
    {
      description: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: {
          args: true,
          msg: "Todo is already there",
        },
      },
      status: DataTypes.BOOLEAN,
    },
    {}
  );
  Todo.associate = function (models) {
    // associations can be defined here
  };
  return Todo;
};
