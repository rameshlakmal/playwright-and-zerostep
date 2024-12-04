import { test as base } from '@playwright/test';
import { aiFixture } from '@zerostep/playwright';

const test = base.extend({
  ...aiFixture(base),
});

export default test; // Export `test` directly as the default export
