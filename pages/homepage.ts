
export class HomePage
{
   
    linknewlead = "//a[text()='New Lead']";
    linklogout = "//a[contains(text(), 'Logout')]";
    linkleads = "(//a[text()='Leads'])[1]";
    linkhome = "//a[text()='Home']";
     

    page: any;
    constructor(page:any)
    {
        this.page=page;
    }
    
    async verifyHomeLink(): Promise<boolean>
    {
        return await this.page.locator(this.linkhome).isVisible();
    }

    async verifyNewLeadLink(): Promise<boolean>
    {
        return await this.page.locator(this.linknewlead).isVisible();
    }
    async verifyLeadlink(): Promise<boolean>
    {
        return await this.page.locator(this.linkleads).isVisible();
    }
     async verifyLogoutLink(): Promise<boolean>
    {
        return await this.page.locator(this.linklogout).isVisible();
    }
    async clickNewLead()
    {
        await this.page.locator(this.linknewlead).click();
    }
    async clickLeadsLink()
    {
        await this.page.locator(this.linkleads).click();
    }
    async clickHomeLink()
    {
        await this.page.locator(this.linkhome).click();
    }
     async clickLogoutLink()
    {
        await this.page.locator(this.linklogout).click();
    }


}