import {test,expect} from "../fixtures/fixtures.js"; // Use default import


test.describe('Zerostep and Playwright intigration demo' , () => {

  const options = {
    disableScroll: false,
  };


  test.beforeEach(async ({page,ai}) => {
    test.setTimeout(90000)
    await page.goto('https://www.saucedemo.com/')
    await ai ('Enter Username as "standard_user"')
    await ai ('Enter Password as "secret_sauce"')
    await ai ('Click "Login" button')
    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")
})

  test('Verify that user can purchase a product successfully', async ({ ai,page }) => {
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
    await ai("Click 'Finish' button")

    await expect(page).toHaveURL("https://www.saucedemo.com/inventory.html")







    // expect(page.getByText(`Welcome, "${firstName}""${lastName}"!`)).toBeVisible();


    // const subtotal = '_frame": {"_guid": "frame@7cae6b6aa91a8b409c55e6b6391d3725", "_type": "Frame"}, "_selector": "/html/body/section/div[2]/div[2]/div[2]/div[1]/form/table/tbody/tr[3]/td[4]/strong'

    // await ai ('Click "Bulldog" link under Pet Favorites')
    // await ai ('Click second "Add to Cart" button on the table')
    // await ai ('Increase the quantity to 2')
    // await ai ('Click "Update Cart" button')

    // expect(page.locator(subtotal)).toBe("$37.00");

  });


  test.afterEach(async ({page}) => {
    await page.close()
  });

})
