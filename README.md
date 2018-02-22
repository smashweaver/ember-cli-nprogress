# ember-cli-nprogress

This ember-cli addon simplifies integration of NProgress plugin with ember-cli apps.

## Installation

```bash
ember install ember-cli-nprogress
```

**Note:** Version `2.9.0` or higher of the Ember CLI is required

## Usage Examples

### Showing `NProgress` while a model loads
```javascript
import Ember from 'ember';
import nprogress from 'nprogress';

export default Ember.Route.extend({
  model(params){
    nprogress.start();

    let promise = this.store.findRecord('post', params.id);
    return promise.then(function(post){
      nprogress.done();
      return post;
    });
  }
});
```

### Showing `NProgress` during all [loading substates][ember-loading-substates]

```javascript
// app/routes/application.js

import Ember from 'ember';
import nprogress from 'nprogress'

export default Ember.Route.extend({
  actions: {
    loading(transition) {
      nprogress.start();

      transition.finally(() => {
        nprogress.done();
      });

      return true;
    }
  }
});
```

## API

See [rstacruz/nprogress][nprogress] for details.

[nprogress]: https://github.com/rstacruz/nprogress
[ember-loading-substates]: https://guides.emberjs.com/v2.10.0/routing/loading-and-error-substates/#toc_code-loading-code-substates
