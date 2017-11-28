// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');
const DataTypes = Sequelize.DataTypes;

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const laporanabsensi = sequelizeClient.define('data_attd', {
    id_rec: {
      type: Sequelize.INTEGER, 
      primaryKey: true,
      autoIncrement: false 
    },
    Nomor_Induk: {
      type: DataTypes.STRING,
      allowNull: false
    },
    USERID: {
      type: DataTypes.STRING,
      allowNull: false
    },
    User_Acces: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Tanggal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Jam: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Absen: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Keterangan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Hadir: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sakit: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Sakit_SD: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Ijin: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Alpa: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Cuti: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Dinas: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Keterlambatan: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Foto_Ketidakhadiran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Pulang_Lebih_Awal: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Status_Pengajuan_Ketidakhadiran: {
      type: DataTypes.STRING,
      allowNull: true
    },
    Kode_Sekolah: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  laporanabsensi.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return laporanabsensi;
};
