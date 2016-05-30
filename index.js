/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-nprogress',

  included: function(app) {
    this._super.included(app);

    app.import(app.bowerDirectory + '/nprogress/nprogress.js');
    app.import(app.bowerDirectory + '/nprogress/nprogress.css');
  }
};
