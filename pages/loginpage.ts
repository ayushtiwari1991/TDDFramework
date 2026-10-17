
export class LoginPage
{
   
    usernameInput = "//input[@name='user_name']";
    passwordInput = "//input[@name='user_password']";
    LoginButton = "//input[@name='Login']" ;
    errMsg = "//*[contains(text(), ' You must specify a valid username and password.']";

    page: any;
    constructor(page:any)
    {
        this.page=page;
    }
    
    async login(userid: string, password: string)
    {
         await this.setUserName(userid);
         await this.setPassWord(password);
         await this.clickLogin();

    }

    async setUserName(userid: string)
    {
        await this.page.locator(this.usernameInput).fill(userid);
    }

    async setPassWord(password: string)
    {
        await this.page.locator(this.passwordInput).fill(password);
    }

    async clickLogin()
    {
        await this.page.locator(this.LoginButton).click();
    }

    async verifyErrorMsg(): Promise<boolean>

{
    return await this.page.locate(this.errMsg).isVisible();

} 

}