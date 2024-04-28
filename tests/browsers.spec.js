const {test, expect,request} = require('@playwright/test');
const {ApiUtils}=require('../ApiUtils');

const orderPayload={orders: [{country: "Albania", productOrderedId: "6581ca979fd99c85e8ee7faf"}]}
let response;
test.beforeAll(async()=>{

 
           const apiContext= await request.newContext();

         const res= new ApiUtils(apiContext);
        response= res.createOrder(orderPayload);
        

});



test('api req', async ({ page }) => {

   
   
       //const email="testertest@gmail.com";
       //const pass="Tester@123";
       //js file- Login js, DashboardPage

       page.addInitScript(value=>{

         window.localStorage.setItem('token',value);
       },response.token);

       
           


      
   await page.goto("https://rahulshettyacademy.com/client");
   
   //await page.locator("#userEmail").fill(email);
   //await page.locator("#userPassword").fill(pass);
   //await page.locator("[value='Login']").click();
   //await page.waitForLoadState('networkidle');
   
/*async function productFinder(productName){
    
   // const productName ='ZARA COAT 3';
   const products = page.locator(".card-body");
    const count = await products.count();
    for (let i = 0; i < count; i++) {
       if (await products.nth(i).locator("b").textContent() === productName) {
          //add to cart
          await products.nth(i).locator("text= Add To Cart").click();
          break;
       }
    }
return productName;

}

const name=await productFinder("ADIDAS ORIGINAL");
await page.pause();*/

/* below script is to check the - cart screen to check the added items present or not*/

/*await page.locator("[routerlink$='cart']").click();
await page.pause();
let bool=await page.locator("h3:has-text('"+name+"')").isVisible();
expect(bool).toBeTruthy();
await page.pause();

await page.locator("text=Checkout").click();
/*add card details screen*/

/*await page.locator("input[value='4542 9931 9292 2293']").clear();
await page.locator("input[value='4542 9931 9292 2293']").fill("12345678");

await page.locator(".input.ddl:nth-child(2)").selectOption("05");
await page.locator(".input.ddl:nth-child(3)").selectOption("02");

await page.locator(".field.small:nth-child(2) input").pressSequentially("999");
await page.locator(".form__cc>div:nth-child(3)>div input").fill("ABCD");


await page.locator("input[placeholder='Select Country']").pressSequentially("ind");
const dropdown= await page.locator("[class*='ta-results']");
await dropdown.waitFor();
const counrtylist= page.locator("[class*='ta-results'] button span");


for(let i=0;i<await counrtylist.count();i++){

  if(await counrtylist.nth(i).textContent() === " India"){
    await counrtylist.nth(i).click();
    break;
  }
}

await page.locator(".btnn.action__submit.ng-star-inserted").click();

await page.locator(".hero-primary").waitFor();
const orderstatus =await page.locator("h1:has-text(' Thankyou for the order. ')").isVisible();
 expect(orderstatus).toBeTruthy();

 const orderNumber=await page.locator(".ng-star-inserted>td>label").textContent();
 await page.pause();
 console.log(orderNumber)
 await page.locator("tr [routerlink*='myorders']").click();*/

  });