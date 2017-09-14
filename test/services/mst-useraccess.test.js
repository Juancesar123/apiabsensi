const assert = require('assert');
const app = require('../../src/app');

describe('\'mst_useraccess\' service', () => {
  it('registered the service', () => {
    const service = app.service('masteruseraccess');

    assert.ok(service, 'Registered the service');
  });
});
