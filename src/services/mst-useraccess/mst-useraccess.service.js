// Initializes the `mst_useraccess` service on path `/masteruseraccess`
const createService = require('feathers-sequelize');
const createModel = require('../../models/mst-useraccess.model');
const hooks = require('./mst-useraccess.hooks');
const filters = require('./mst-useraccess.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'mst-useraccess',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/masteruseraccess', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('masteruseraccess');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
