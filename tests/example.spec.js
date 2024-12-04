import test from "../fixtures/fixtures.js"; // Use default import



test.describe('Login form test cases' , () => {

  const options = {
    disableScroll: false,
  };

  test('Zero Example', async ({ ai,page }) => {

    await page.goto('https://jpetstore.aspectran.com/')
    await ai ('Click "Sign In" button')
    await ai ('Click "Login" button')
    // await ai ('Verify that the user is successfully logged in by checking "Welcome ADC!"')
    await ai ('Click "Bulldog" link under Pet Favorites')
    await ai ('Click second "Add to Cart" button on the table')
  
    // const headerText = await ai('Get the header text')
    // await page.goto('https://google.com/')
    // await ai(`Type "${headerText}" in the search box`)
    // await ai('Press enter')
  });

})
