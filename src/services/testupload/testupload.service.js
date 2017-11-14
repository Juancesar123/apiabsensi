// Initializes the `testupload` service on path `/testupload`
const createService = require('feathers-sequelize');
const createModel = require('../../models/testupload.model');
const hooks = require('./testupload.hooks');
const filters = require('./testupload.filters');
// feathers-blob service
const blobService = require("feathers-blob");
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const fs = require("fs-blob-store");
const multer = require('multer');
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/img')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);        
  }
})
const multipartMiddleware = multer();
const upload = multer({ storage: storage});
const dauria = require('dauria');
// File storage location. Folder must be created before upload.
// Example: "./uploads" will be located under feathers app top level.
const blobStorage = fs("./uploads");
module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'testupload',
    Model,
    paginate
  };
  // Initialize our service with any options it requires
  app.use('/testupload',  upload.single('file'),
  createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('testupload');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
