// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const mstUseraccess = sequelizeClient.define('mst-useraccess', {
    id: {
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    user_access: {
      type: DataTypes.STRING,
      allowNull: false
    },
    kode_sekolah: {
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

  mstUseraccess.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return mstUseraccess;
};
