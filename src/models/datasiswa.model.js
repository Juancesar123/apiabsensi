// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datasiswa = sequelizeClient.define('mst_siswa', {
    id :{
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: true 
    },
    nomorinduk: {
      type: Sequelize.STRING(20),
      unique: true,
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
    tempatlahir: {
      type: Sequelize.STRING(40),
      allowNull: false
    },
    jenis: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    alamat: {
      type: Sequelize.TEXT   ,
      allowNull: true
    },
    golongandarah: {
      type: Sequelize.STRING(5),
      allowNull: true
    },
    idkelas: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    idagama: {
      type: Sequelize.INTEGER,
      allowNull: true
    },
    telepon: {
      type: Sequelize.STRING(13),
      allowNull: true
    },
    hp: {
      type: Sequelize.STRING(13),
      allowNull: true
    },
    emailpribadi: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    foto: {
      type: Sequelize.STRING,
      allowNull: true
    },
    ayah: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    ibu: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    nomorhpayah: {
      type: Sequelize.STRING(13),
      allowNull: true
    },
    nomorhpibu: {
      type: Sequelize.STRING(13),
      allowNull: true
    },
    statusrec: {
      type: Sequelize.STRING(40),
      allowNull: true
    },
    kodesekolah: {
      type: Sequelize.STRING(40),
      allowNull: true
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
