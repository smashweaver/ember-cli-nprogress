import Application from '@ember/application';
import { run } from '@ember/runloop';
import { module, test } from 'qunit';

import NprogressInitializer from 'dummy/initializers/nprogress';
import { scheduler } from 'ember-cli-nprogress/initializers/nprogress';
import nprogress from 'nprogress';

let application;

module('Unit | Initializer | nprogress', {
  beforeEach() {
    run(function() {
      application = Application.create();
      application.deferReadiness();
    });
  }
});

test('it sets up an Ember-friendly scheduler function', function(assert) {
  NprogressInitializer.initialize(application);

  assert.equal(nprogress.settings.scheduler, scheduler);
});
