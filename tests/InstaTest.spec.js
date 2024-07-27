const {test,expect} =  require('@playwright/test');
const {POManager}=require('../pageObjects/POManager');


test.only('Login To The Instgram Account And send Message',async ({page})=>{

const pageManager=new POManager(page);

const loginpage=await pageManager.getInstagramLoginPage();
const searchUserAndSendMessage= pageManager.getSerachUserPage();


await loginpage.loginToTheInsta("ximice9753@digdy.com","Dummy@123");

await searchUserAndSendMessage.SearchUser("dummytwo30");

await searchUserAndSendMessage.sendMessageToSelectedUser("Heelo Welcome Buddy!!!");

})
