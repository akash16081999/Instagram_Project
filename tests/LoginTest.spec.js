const {test,expect}= require('@playwright/test');
const{POManager}=require('../pageObjects/POManager');
const dataset= JSON.parse(JSON.stringify(require('../TestData/placeOrderTestData.json')));

for(const data of dataset){
test(`Login with Valid Credentials ${data.productName}`,async({page})=>{

    const pageManager=new POManager(page);

    const loginpage=pageManager.getLoginPage();
    await loginpage.validLogin(data.email,data.password);

    const dashboardpage= pageManager.getDashboardPage(); 
    await dashboardpage.searchProduct(data.productName); 
    await dashboardpage.navigateToCart();
    

})

}