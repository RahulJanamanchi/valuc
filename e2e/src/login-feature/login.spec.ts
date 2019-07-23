import { LoginPage } from "./page-objects/login.page";
import { HomePage } from "./page-objects/home.page";


describe('Login test for all users ',()=>{

    it('Login as a Guest User', async ()=> {
        debugger;
        let loginPage:LoginPage=new LoginPage();
        loginPage=await loginPage.get();
        let homepage=await loginPage.loginAsGuest()
        console.log(homepage.title);
        expect(homepage instanceof HomePage);
      });
})