import Route from '@ember/routing/route';
import nprogress from 'nprogress';

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
