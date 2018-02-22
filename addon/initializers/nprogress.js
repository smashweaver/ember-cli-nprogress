import { run } from '@ember/runloop';
import nprogress from 'nprogress';

export const scheduler = run.later.bind(undefined, undefined);

export function initialize() {
  if (typeof FastBoot === 'undefined') {
    nprogress.configure({ scheduler });
  }
}

export default {
  name: 'nprogress',
  initialize
};
