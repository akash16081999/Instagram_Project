class SearchUserPage {
  constructor(page) {
    this.page = page;

    this.searchButton = page.locator(
      ".x1lliihq.x193iq5w.x6ikm8r.x10wlt62.xlyipyv.xuxw1ft"
    );

    this.userSearchField = page.locator("input[aria-label='Search input']");
    this.selectUser = page.getByText("instagram");

    this.userSelection = page.locator(
      ".x9f619.x78zum5.xdt5ytf.x1iyjqo2.x6ikm8r.x1odjw0f.xh8yej3.xocp1fn a"
    );

    this.selectInsta=page.getByText("dummytwo30");

    this.messageButton = page.getByRole("button", { name: "Message" });
    this.MessageField = page.locator("div[aria-describedby='Message']");
    this.SendMessage = page.getByRole("button", { name: "Send" });

    this.notNowNotification=page.locator("._a9--._ap36._a9_1");
  }

  async SearchUser(username) {
    

   await this.searchButton.nth(1).click();
  
   await this.userSearchField.fill(username);
   await this.page.pause();

   await this.selectInsta.last().click();
   


    /*for (let i = 0; i < await this.userSelection.count(); i++) {
      console.log(await this.userSelection.nth(i).textContent());
      if ((await this.userSelection.nth(i).textContent()) === username) {
        
        await this.userSelection.nth(i).click();
        break;
      }
    }*/
  }
  async sendMessageToSelectedUser(message) {
    await this.messageButton.click();
    await this.notNowNotification.click();
    await this.MessageField.fill(message);
    await this.SendMessage.click();
  }
}
module.exports = { SearchUserPage };
