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

// This is required to get the app set up
test('loading an initial route', function(assert) {
  assert.expect(0);

  visit('/');
});

// This test just verifies that an error is not produced in cases where `nprogress`
// is running while the app is being torn down
test('it fires the `start` event within the run loop', function(assert) {
  visit('/');

  click('a');

  andThen(function() {
    assert.equal(currentURL(), '/some-other-route');
  });
});
