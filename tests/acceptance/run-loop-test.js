import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

import nprogress from 'ember-cli-nprogress';

// Note: This somewhat unorthidox test setup will throw an error when running the tests in Chrome,
// if `nprogress` isn't configured to run within the Ember run loop
moduleForAcceptance('Acceptance | run loop', {
  beforeEach() {
    nprogress.configure({
      parent: '#nprogress-parent'
    });
  }
});

test('loading an initial route', function(assert) {
  assert.expect(0);

  visit('/');
});

test('it fires the `start` event within the run loop', function(assert) {
  visit('/');

  click('a');

  andThen(function() {
    assert.equal(currentURL(), '/some-other-route');
  });
});
