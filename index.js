/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-nprogress',

  included: function(app) {
    this._super.included(app);
    this.ui.writeLine('Including nprogress files!');
    app.import(app.bowerDirectory + '/nprogress/nprogress.js');
    app.import(app.bowerDirectory + '/nprogress/nprogress.css');
  }
};
