/* jshint node: true */
'use strict';

var debug = require('debug')('ember-cli-nprogress:addon');

module.exports = {
  name: 'ember-cli-nprogress',

  included: function(app) {
    this._super.included(app);

    debug('Importing NProgress files!');
   
    if (!process.env.EMBER_CLI_FASTBOOT) {
      app.import(app.bowerDirectory + '/nprogress/nprogress.js', {
        using: [
          { transformation: 'amd', as: 'nprogress' }
        ]
      });
    }

    app.import(app.bowerDirectory + '/nprogress/nprogress.css');

    debug('Imported NProgress files!');
  }
};
