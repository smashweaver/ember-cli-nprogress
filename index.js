/* jshint node: true */
'use strict';

const path = require('path');
const Funnel = require('broccoli-funnel');
const MergeTrees = require('broccoli-merge-trees');
const debug = require('debug')('ember-cli-nprogress:addon');
const FastbootTransform = require('fastboot-transform');

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

    host.import('vendor/nprogress/nprogress.js');
    host.import('vendor/nprogress-shim.js', {
      exports: {
        nprogress: ['default']
      }
    });

    host.import('vendor/nprogress/nprogress.css');

    debug('Imported NProgress files!');
  },

  treeForVendor(vendorTree) {
    const trees = [];

    const nprogressJs = FastbootTransform(new Funnel(path.dirname(require.resolve('nprogress/nprogress.js')), {
      files: ['nprogress.js'],
      destDir: 'nprogress'
    }));

    const nprogressCss = new Funnel(path.dirname(require.resolve('nprogress/nprogress.js')), {
      files: ['nprogress.css'],
      destDir: 'nprogress'
    })

    if (vendorTree !== undefined) {
      trees.push(vendorTree);
    }

    trees.push(nprogressJs);

    trees.push(nprogressCss);

    return new MergeTrees(trees);
  }
};
