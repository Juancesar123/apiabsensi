// Initializes the `users` service on path `/users`
const createService = require('feathers-sequelize');
const createModel = require('../../models/users.model');
const hooks = require('./users.hooks');
const filters = require('./users.filters');
const multer = require('multer');
const blobService = require('feathers-blob');
const fs = require('fs-blob-store');
const blobStorage = fs(__dirname + '/uploads');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/imgprofile')
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
    id: 'nomorinduk',
    name: 'users',
    Model
  };
  const opsi = {
     id: 'nomorinduk',
    name: 'simpangambar',
    Model:blobStorage
  }

  // Initialize our service with any options it requires
  app.use('/users',upload.single('file'),createService(options));
  app.use('/simpangambar',upload.single('file'),blobService(opsi));
  // Get our initialized service so that we can register hooks and filters
  const service = app.service('users');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
