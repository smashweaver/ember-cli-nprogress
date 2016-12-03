# ember-cli-nprogress

This ember-cli addon simplifies integration of NProgress plugin with ember-cli apps.

## Installation

```bash
ember install ember-cli-nprogress
```

**Note:** Version `2.9.0` or higher of the Ember CLI is required

## Usage

```javascript
import Ember from 'ember';
import progress from 'ember-cli-nprogress';

export default Ember.Route.extend({
  model(params){
    progress.start();

    let promise = this.store.findRecord('post', params.id);
    return promise.then(function(post){
      progress.done();
      return post;
    });
  }
});
```

## API

See [rstacruz/nprogress](https://github.com/rstacruz/nprogress) for details.
