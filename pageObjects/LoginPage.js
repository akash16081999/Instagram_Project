class LoginPage {
  constructor(page) {
    this.page=page;
    this.email = page.locator("#userEmail");
    this.password = page.locator("#userPassword");
    this.loginClick = page.locator("[value='Login']");
  }

  async validLogin(emailId, passWord) {

    await this.page.goto("https://rahulshettyacademy.com/client");
    await this.email.type(emailId);
    console.log(emailId);
    await this.password.type(passWord);
    console.log(passWord);
    console.log("before click");
    await this.loginClick.click();
    console.log("after clicked login");

    await this.page.waitForLoadState('networkidle');
    
  }
  
}
module.exports={LoginPage};
