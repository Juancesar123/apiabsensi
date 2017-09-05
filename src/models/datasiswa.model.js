// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datasiswa = sequelizeClient.define('mst_siswa', {
    nomorinduk: {
      type: Sequelize.STRING(20),
      primaryKey: true,
      allowNull: false
    },
    nama: {
      type: Sequelize.STRING(50),
      allowNull: false
    },
    tanggallahir: {
      type: Sequelize.DATE,
      allowNull: false
    },
    jenis: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    alamat: {
      type: Sequelize.TEXT   ,
      allowNull: false
    },
    golongandarah: {
      type: Sequelize.STRING(5),
      allowNull: false
    },
    idkelas: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    idagama: {
      type: Sequelize.INTEGER,
      allowNull: false
    },
    telepon: {
      type: Sequelize.STRING(13),
      allowNull: false
    },
    hp: {
      type: Sequelize.STRING(13),
      allowNull: false
    },
    emailpribadi: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    foto: {
      type: Sequelize.STRING,
      allowNull: false
    },
    ayah: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    ibu: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    nomorhpayah: {
      type: Sequelize.STRING(13),
      allowNull: false
    },
    nomorhpibu: {
      type: Sequelize.STRING(13),
      allowNull: false
    },
    statusrec: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    kodesekolah: {
      type: Sequelize.STRING(40),
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  datasiswa.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return datasiswa;
};
