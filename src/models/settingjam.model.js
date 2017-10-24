// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const settingjam = sequelizeClient.define('settingjam', {
    day: {
      type: DataTypes.STRING,
      allowNull: false
    },
    user_acces: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kodesekolah: {
      type: DataTypes.STRING,
      allowNull: false
    },
    settime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    starttime: {
      type: DataTypes.STRING,
      allowNull: false
    },
    endtime: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  settingjam.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return settingjam;
};
