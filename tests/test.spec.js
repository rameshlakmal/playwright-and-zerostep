import {test,expect} from "../fixtures/fixtures.js"; // Use default import


test.describe('Zerostep and Playwright intigration demo' , () => {

  // const options = {
  //   disableScroll: false,
  // };


  test.beforeEach(async ({page,ai}) => {
    test.setTimeout(60000)
    await page.goto('https://www.saucedemo.com/')
    await ai ('Enter Username as "standard_user"')
    await ai ('Enter Password as "secret_sauce"')
    await ai ('Click "Login" button')
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

  test('Verify that user can purchase a product successfully', async ({ ai,page,checkoutPage }) => {

    // await ai ('Expand dropdown below the cart icon','Select "Price (low to high)" option')
    await ai ('Click "Add to cart" button in "Sauce Labs Backpack" product link')
    await ai ('Click "Add to cart" button in "Sauce Labs Bike Light" product link')

//Assertions
    expect(page.locator('#remove-sauce-labs-backpack')).toContainText("Remove");
    expect(page.locator('#remove-sauce-labs-bike-light')).toContainText("Remove");
    expect(page.locator('.shopping_cart_badge')).toContainText("2");

    await ai('Click cart icon')
    await ai("Click 'Checkout' button")
    await ai("Fill checkout form with realistic values")
    await ai("Click 'Continue' button")

    await page.waitForURL('https://www.saucedemo.com/checkout-step-two.html');


    await checkoutPage.assertTotalWithTax("Total: $43.18")



    // expect(page.locator('.summary_total_label')).toContainText("Total: $43.18");
    // await expect(page.locator('//*[@id="checkout_summary_container"]/div/div[2]/div[8]')).toContainText("Total: $43.18");



    // const totalLabel = await page.locator('.summary_total_label').textContent();
    // expect(totalLabel?.trim()).toBe('Total: $43.18');

    await ai("Click 'Finish' button")

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
  });


  test.afterEach(async ({page}) => {
    await page.close()
  });

})
