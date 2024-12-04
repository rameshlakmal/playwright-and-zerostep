import { test as base, expect as baseExpect } from '@playwright/test';
import { aiFixture } from '@zerostep/playwright';

const test = base.extend({
  ...aiFixture(base),
});

export { test, baseExpect as expect };
export default test;