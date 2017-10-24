// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const mastersekolah = sequelizeClient.define('mastersekolah', {
    kode_sekolah: {
      type: DataTypes.STRING,
      allowNull: false
    },
    status_regitster: {
      type: DataTypes.STRING,
      allowNull: false
    },
    nama_sekolah: {
      type: DataTypes.STRING,
      allowNull: false
    },
    tingkat_sekolah: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id_provinsi: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    id_kabupaten: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    logo_sekolah: {
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  mastersekolah.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return mastersekolah;
};
