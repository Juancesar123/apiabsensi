const assert = require('assert');
const app = require('../../src/app');

describe('\'settingjam\' service', () => {
  it('registered the service', () => {
    const service = app.service('settingjam');

    assert.ok(service, 'Registered the service');
  });
});
