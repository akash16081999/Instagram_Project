class ApiUtils{

  
 
constructor(apiContext) {
    
    this.apiContext=apiContext;
    
}

    async createOrder(createPayload){
        let  token="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWY1NjU1OGE4NmY4Zjc0ZGM5ZmI1YzMiLCJ1c2VyRW1haWwiOiJ0ZXN0ZXJ0ZXN0QGdtYWlsLmNvbSIsInVzZXJNb2JpbGUiOjkwOTA4Nzg3NjUsInVzZXJSb2xlIjoiY3VzdG9tZXIiLCJpYXQiOjE3MTA2NjkyNTYsImV4cCI6MTc0MjIyNjg1Nn0.NLQZZLk717Mm1DDBsPEWgVyR2dbmJKKUYkDxLMAhbtE";
       let response={};
        response.token = token;
        

        const orderResponse= await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order",
        {
         data : createPayload,
         headers: 
          {
            
            'Authorization': response.token,
            'Content-Type' : 'application/json'
           },
         
        }
        )
        const orderResponsejson=await orderResponse.json();
        //const ordernumber=await orderResponsejson.orders[0];
        console.log(orderResponsejson)
        return response;

    }



}
module.exports={ApiUtils};