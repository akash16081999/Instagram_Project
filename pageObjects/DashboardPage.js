class DashboardPage {
  constructor(page) {
    this, (page = page);
    console.log("constructor invoked ");
    this.products = page.locator(".card-body");
    this.NavigateCartButton = page.locator("[routerlink$='cart']");
  }

  async searchProduct(productName) {
    while (true) {
      if ((await this.products.count()) > 1) {
        break;
      }
    }
    const count = await this.products.count();
    for (let i = 0; i < count; i++) {
      if (
        (await this.products.nth(i).locator("b").textContent()) === productName
      ) {
        //add to cart
        await this.products.nth(i).locator("text= Add To Cart").click();
        break;
      }
    }
  }

  async navigateToCart() {
    await this.NavigateCartButton.click();
  }
}
module.exports = { DashboardPage };
