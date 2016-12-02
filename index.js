/* jshint node: true */
'use strict';

var debug = require('debug')('ember-cli-nprogress:addon');

module.exports = {
  name: 'ember-cli-nprogress',

  included: function(app) {
    this._super.included(app);

    debug('Importing NProgress files!');

    app.import(app.bowerDirectory + '/nprogress/nprogress.js');
    app.import(app.bowerDirectory + '/nprogress/nprogress.css');

    debug('Imported NProgress files!');
  }
};
