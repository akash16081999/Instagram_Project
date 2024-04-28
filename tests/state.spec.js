
 const {test}= require('@playwright/test');
const { json } = require('stream/consumers');

const email="testertest@gmail.com";
const pass="Tester@123";

let webcontext;
 test.beforeAll('Login Test',async({browser})=>{

const context=await browser.newContext();
     const page=await context.newPage();
     await page.goto("https://rahulshettyacademy.com/client");
   
     await page.locator("#userEmail").fill(email);
     await page.locator("#userPassword").fill(pass);
     await page.locator("[value='Login']").click();
     await page.waitForLoadState('networkidle');

    await context.storageState({path :'state.json'});
   webcontext=await browser.newContext({storageState:'state.json'});


 })

 /*test('Execute without login',async()=>{

     const page=await webcontext.newPage();
     await page.goto("https://rahulshettyacademy.com/client");
     async function productFinder(productName){
    
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
await page.pause();


 })*/
const fakePayload={data:[],message:"No Orders"};

 test('FakeResponse Test',async()=>{


  const page=await webcontext.newPage();
  await page.goto("https://rahulshettyacademy.com/client");

  await page.route("https://rahulshettyacademy.com/api/ecom/order/get-orders-for-customer/65f56558a86f8f74dc9fb5c3",async route=>{

const response=await page.request.fetch(route.request());
let body=JSON.stringify(fakePayload);
route.fulfill({

   response,body,

});



  });
  
  await page.locator("[routerLink$='myorders']").click();
  await page.pause();
  

    

 })
