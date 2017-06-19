/* jshint node: true */
'use strict';

const path = require('path');
const map = require('broccoli-stew').map;
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const debug = require('debug')('ember-cli-nprogress:addon');

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
    this._super.included.apply(this, arguments);

    debug('Importing NProgress files!');

    var host = findHost(this);

    host.import('vendor/nprogress/nprogress.js', {
      using: [
        { transformation: 'amd', as: 'nprogress' }
      ]
    });

    host.import('vendor/nprogress/nprogress.css');

    debug('Imported NProgress files!');
  },

  treeForVendor(vendorTree) {
    const trees = [];
    const nprogressTree = new Funnel(path.dirname(require.resolve('nprogress/nprogress.js')), {
      files: ['nprogress.js', 'nprogress.css'],
      destDir: 'nprogress'
    });

    if (vendorTree !== undefined) {
      trees.push(vendorTree);
    }

    trees.push(nprogressTree);

    return new MergeTrees(trees);
  }
};
