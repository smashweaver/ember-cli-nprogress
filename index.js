/* jshint node: true */
'use strict';

var debug = require('debug')('ember-cli-nprogress:addon');

/* identical to ember-cli/lib/models/addon.js's `_findHost` */
/* used instead of breaking backwards compat. w/ older versions of cli */
function findHost(addon) {
  var current = addon;
  var app;

  do {
    app = current.app || app;
  } while (current.parent.parent && (current = current.parent));

  return app;
}

module.exports = {
  name: 'ember-cli-nprogress',

  included: function() {
    this._super(arguments);

    debug('Importing NProgress files!');

    var host = findHost(this);

    host.import(host.bowerDirectory + '/nprogress/nprogress.js', {
      using: [
        { transformation: 'amd', as: 'nprogress' }
      ]
    });

    host.import(host.bowerDirectory + '/nprogress/nprogress.css');

    debug('Imported NProgress files!');
  }
};
