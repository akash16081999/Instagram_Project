
const {InstagramLoginPage}=require('./InstagramLoginPage');
const {SearchUserPage}=require('./SearchUserPage')

class POManager{

constructor(page){
    this.InstagramLoginPage=new InstagramLoginPage(page);
    this.SearchUserPage=new SearchUserPage(page);

}
getInstagramLoginPage(){

    return this.InstagramLoginPage;
}

getSerachUserPage(){

    return this.SearchUserPage;
}

}

module.exports={POManager};