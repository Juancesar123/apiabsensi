// Initializes the `datasiswa` service on path `/datasiswa`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datasiswa.model');
const hooks = require('./datasiswa.hooks');
const filters = require('./datasiswa.filters');
const blobService = require("feathers-blob");
// Here we initialize a FileSystem storage,
// but you can use feathers-blob with any other
// storage service like AWS or Google Drive.
const fs = require("fs-blob-store");


// File storage location. Folder must be created before upload.
// Example: "./uploads" will be located under feathers app top level.
const blobStorage = fs("./uploads");
module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datasiswa',
    Model,
    
  };
  
  // Initialize our service with any options it requires
  app.use('/datasiswa',
  createService(options)
 );

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datasiswa');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
    console.log(filters);
  }
};
