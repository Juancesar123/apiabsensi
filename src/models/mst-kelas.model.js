// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const mstKelas = sequelizeClient.define('mst-kelas', {
    id: {
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    kelas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    kode_sekolah: {
      type: DataTypes.STRING,
      allowNull: true
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  mstKelas.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return mstKelas;
};
