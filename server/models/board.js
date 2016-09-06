'use strict';
module.exports = function(sequelize, DataTypes) {
  var Board = sequelize.define('Board', {
    name: DataTypes.STRING,
    image: DataTypes.STRING,
    rate: DataTypes.INTEGER,
    link: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        Board.belongsTo(models.User);
        Board.belongsTo(models.Event);
      }
    }
  });
  return Board;
};
