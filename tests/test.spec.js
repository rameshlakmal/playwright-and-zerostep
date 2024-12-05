import {test,expect} from "../fixtures/fixtures.js";


test.describe('Zerostep and Playwright intigration demo' , () => {

  test.beforeEach(async ({page,ai}) => {
    await page.goto('https://www.saucedemo.com/')
    await ai ('Enter Username as "standard_user"')
    await ai ('Enter Password as "secret_sauce"')
    await ai ('Click "Login" button')
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

  test('Verify that user can purchase a product successfully', async ({ ai,page }) => {

    await ai ('Click "Add to cart" button in "Sauce Labs Backpack" product link')
    await ai ('Click "Add to cart" button in "Sauce Labs Bike Light" product link')
    await ai ('Verify that number two is showing on the cart icon')
    await ai ('Click cart icon')
    await ai ("Click 'Checkout' button")
    await ai ("Fill checkout form with realistic values")
    await ai ("Click 'Continue' button") 
    await ai ("Click 'Finish' button")
  });


  test.afterEach(async ({page}) => {
    await page.close()
  });

})
