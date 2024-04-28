const test = require("@playwright/test");

test("mock request", async ({ page }) => {
  const email = "testertest@gmail.com";
  const pass = "Tester@123";

  await page.goto("https://rahulshettyacademy.com/client");

  await page.locator("#userEmail").fill(email);
  await page.locator("#userPassword").fill(pass);
  await page.locator("[value='Login']").click();
  await page.waitForLoadState("networkidle");

  await page.locator("[routerLink$='myorders']").click();

  await page.route(
    "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=*",
    (route) =>
      route.continue({
        url: "https://rahulshettyacademy.com/api/ecom/order/get-orders-details?id=661137d2a86f8f74dcb943bKI9",
      })
  );
  //await page.locator("button:has-text('View')").first().click();
     await page.locator("button:has-text('View')").first().click();
     await page.pause();
    await test.expect(page.locator("b").last()).toHaveText("You are not authorize to view this order");
  


});

test.only("visual Testing",async({page})=>{

    await page.goto("https://www.facebook.com/");
    test.expect(await page.screenshot()).toMatchSnapshot("google.png");



})



