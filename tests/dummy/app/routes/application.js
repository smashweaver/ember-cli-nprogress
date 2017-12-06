import Ember from 'ember';
import nprogress from 'nprogress';

const { Route } = Ember;

export default Route.extend({
  actions: {
    willTransition() {
      nprogress.start();
    },

    didTransition() {
      nprogress.done();
    }
  }
});
