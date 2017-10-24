const assert = require('assert');
const app = require('../../src/app');

describe('\'mastersekolah\' service', () => {
  it('registered the service', () => {
    const service = app.service('mastersekolah');

    assert.ok(service, 'Registered the service');
  });
});
