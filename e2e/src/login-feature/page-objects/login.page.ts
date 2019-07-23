import { browser, element, by } from "protractor";
import { HomePage } from "./home.page";

export class LoginPage {
    
    private btnOwner=element(by.xpath("//div[@class='container']//div[1]//button[1]"));
    private btnUser=element(by.xpath("//div[2]//button[1]"));
    private btnGuest=element(by.xpath("//div[3]//button[1]"));

    constructor(){}

    async get():Promise<LoginPage>{
        await browser.get('/login');
        return this;
    }

    async loginAsOwner(): Promise<HomePage>{
        await this.btnOwner.click();
        return new HomePage();
    }

    async loginAsUser(): Promise<HomePage>{
        await this.btnUser.click();
        return new HomePage();
    }

    async loginAsGuest(): Promise<HomePage>{
        await this.btnGuest.click();
        return new HomePage();
    }
}