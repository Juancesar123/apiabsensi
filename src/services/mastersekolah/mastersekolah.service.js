// Initializes the `mastersekolah` service on path `/mastersekolah`
const createService = require('feathers-sequelize');
const createModel = require('../../models/mastersekolah.model');
const hooks = require('./mastersekolah.hooks');
const filters = require('./mastersekolah.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'mastersekolah',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/mastersekolah', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('mastersekolah');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
