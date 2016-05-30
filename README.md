# ember-cli-nprogress
This ember-cli addon simplifies integration of NProgress plugin with ember-cli apps.

## Installation
* npm install --save ember-cli-nprogress

## Usage
<pre>
<code>
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
</code>
</pre>

## Running
* `ember server`
* Visit your app at http://localhost:4200.

## Running Tests
* `npm test` (Runs `ember try:testall` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building
* `ember build`

For more information on using ember-cli, visit [http://www.ember-cli.com/](http://www.ember-cli.com/).


## API
See [rstacruz/nprogress](https://github.com/rstacruz/nprogress) for details.
