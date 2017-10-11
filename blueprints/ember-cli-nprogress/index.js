module.exports = {
  normalizeEntityName: function() {}, // no-op since we're just adding dependencies

  afterInstall: function() {
    return this.addPackagesToProject([
      { name: 'broccoli-merge-trees', target: '^2.0.0' },
      { name: 'broccoli-funnel', target: '^2.0.1' }
    ]);
  }
};
