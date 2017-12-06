import nprogress from 'nprogress';
import { module, test } from 'qunit';

module('Unit | Utility | nprogress');

test('it exports the `nprogress` object', function(assert) {
  assert.ok(nprogress, 'Exports library');
  assert.ok(nprogress.start, 'Has `start` method');
  assert.ok(nprogress.done, 'Has `done` method');
});

test('it does not expose a global object', function(assert) {
  assert.notOk(window['Nprogress']);
});
