import Ember from 'ember';
import nprogress from 'nprogress';

const { run } = Ember;

export const scheduler = run.later.bind(undefined, undefined);

export function initialize() {
  nprogress.configure({ scheduler });
}

export default {
  name: 'nprogress',
  initialize
};
