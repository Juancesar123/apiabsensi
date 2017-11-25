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
      autoIncrement: true 
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
      allowNull: false
    },
    Jam: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Absen: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Keterangan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Status: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Hadir: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Sakit: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Sakit_SD: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Ijin: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Alpa: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Cuti: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Dinas: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Keterlambatan: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Foto_Ketidakhadiran: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Pulang_Lebih_Awal: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Status_Pengajuan_Ketidakhadiran: {
      type: DataTypes.STRING,
      allowNull: false
    },
    Kode_Sekolah: {
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

  laporanabsensi.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return laporanabsensi;
};
