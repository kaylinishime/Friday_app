'use strict';
module.exports = function(sequelize, DataTypes) {
  var Event = sequelize.define('Event', {
    name: DataTypes.STRING,
    location: DataTypes.STRING,
    date: DataTypes.DATE,
    time: DataTypes.DATE
  }, {
    classMethods: {
      associate: function(models) {
        Event.hasMany(models.User);
        Event.hasMany(models.Board);
      }
    }
  });
  return Event;
};
