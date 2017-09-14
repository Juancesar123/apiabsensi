const assert = require('assert');
const app = require('../../src/app');

describe('\'mst_kelas\' service', () => {
  it('registered the service', () => {
    const service = app.service('masterkelas');

    assert.ok(service, 'Registered the service');
  });
});
