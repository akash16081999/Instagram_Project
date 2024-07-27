class InstagramLoginPage {
  constructor(page) {
    this.page = page;
    console.log("constructor invoked ");
    this.email = page.locator(
      "input[aria-label='Phone number, username, or email']"
    );
    this.password = page.locator("input[aria-label='Password']");
    this.LoginButton = page.locator("._acan._acap._acas._aj1-._ap30");
  }

  async loginToTheInsta(useremail, pass) {

    await this.page.goto("https://www.instagram.com/");
    await  this.email.fill(useremail);
    await this.password.fill(pass);
     await this.LoginButton.click();
  }
}
module.exports = { InstagramLoginPage };