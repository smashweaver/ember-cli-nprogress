/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-cli-nprogress',

  included: function(app) {
    this._super.included(app);
    this.ui.writeLine('Importing NProgress files!');
    app.import(app.bowerDirectory + '/nprogress/nprogress.js');
    app.import(app.bowerDirectory + '/nprogress/nprogress.css');
    this.ui.writeLine('Imported NProgress files!');
  }
};
