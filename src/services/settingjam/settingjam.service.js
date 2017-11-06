// Initializes the `settingjam` service on path `/settingjam`
const createService = require('feathers-sequelize');
const createModel = require('../../models/settingjam.model');
const hooks = require('./settingjam.hooks');
const filters = require('./settingjam.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'settingjam',
    Model
  };

  // Initialize our service with any options it requires
  app.use('/settingjam', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('settingjam');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
