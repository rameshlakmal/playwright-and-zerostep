import { test as base, expect as baseExpect } from '@playwright/test';
import { aiFixture } from '@zerostep/playwright';
import CheckoutPage from '../pages/checkoutPage';

const test = base.extend({
  ...aiFixture(base),

  checkoutPage: async({page},use) => {
    const checkoutPage = new CheckoutPage(page);
    await use(checkoutPage);
},

});

export { test, baseExpect as expect };
export default test;