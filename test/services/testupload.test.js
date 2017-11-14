const assert = require('assert');
const app = require('../../src/app');

describe('\'testupload\' service', () => {
  it('registered the service', () => {
    const service = app.service('testupload');

    assert.ok(service, 'Registered the service');
  });
});
