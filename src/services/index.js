const users = require('./users/users.service.js');
const pegawai = require('./pegawai/pegawai.service.js');
const datasiswa = require('./datasiswa/datasiswa.service.js');
const mstKelas = require('./mst-kelas/mst-kelas.service.js');
const mstUseraccess = require('./mst-useraccess/mst-useraccess.service.js');
const settingjam = require('./settingjam/settingjam.service.js');
const mastersekolah = require('./mastersekolah/mastersekolah.service.js');
const dataperson = require('./dataperson/dataperson.service.js');
const tmpsuratketerangan = require('./tmpsuratketerangan/tmpsuratketerangan.service.js');
const testupload = require('./testupload/testupload.service.js');
const laporanabsensi = require('./laporanabsensi/laporanabsensi.service.js');
const importdatasiswa = require('./importdatasiswa/importdatasiswa.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(pegawai);
  app.configure(datasiswa);
  app.configure(mstKelas);
  app.configure(mstUseraccess);
  app.configure(settingjam);
  app.configure(mastersekolah);
  app.configure(dataperson);
  app.configure(tmpsuratketerangan);
  app.configure(testupload);
  app.configure(laporanabsensi);
  app.configure(importdatasiswa);
};
