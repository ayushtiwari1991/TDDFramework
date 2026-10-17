
export class LeadPage
{
   
    lastName = "//input[@name='lastname']";
    company = "//input[@name='company']" ;
    saveButton = "(//input[@name='button'])[1]";


    page: any;
    constructor(page:any)
    {
        this.page=page;
    }
    
    async createLead(lastName: string, company: string)
    {
         await this.setLastName(lastName);
         await this.setCompany(company);
         await this.clickSave();

    }

    async setLastName(lastname: string)
    {
        await this.page.locator(this.lastName).fill(lastname);
    }

    async setCompany(company: string)
    {
        await this.page.locator(this.company).fill(company);
    }

    async clickSave()
        {
            await this.page.locator(this.saveButton).click();

        }
    
} 