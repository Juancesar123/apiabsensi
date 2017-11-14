// Initializes the `tmpsuratketerangan` service on path `/tmpsuratketerangan`
const createService = require('feathers-sequelize');
const createModel = require('../../models/tmpsuratketerangan.model');
const hooks = require('./tmpsuratketerangan.hooks');
const blobService = require('feathers-blob');
const filters = require('./tmpsuratketerangan.filters');

// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const fs = require('fs-blob-store');
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);        
  }
})
const upload = multer({ storage: storage});
module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'tmpsuratketerangan',
    Model,
    paginate
  };
  // Initialize our service with any options it requires
  app.use('/tmpsuratketerangan',upload.single('file'),createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('tmpsuratketerangan');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
