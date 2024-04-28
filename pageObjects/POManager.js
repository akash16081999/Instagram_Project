
const { LoginPage } = require('./LoginPage');
const { DashboardPage } = require('./DashboardPage');

class POManager{

constructor(page){
    this.loginpage=new LoginPage(page);
    this.dashboard=new DashboardPage(page);

}

getLoginPage(){
    return this.loginpage;
}

getDashboardPage(){
    return this.dashboard;
}

}

module.exports={POManager};