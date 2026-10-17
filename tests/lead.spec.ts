
import {test,expect} from '@playwright/test';
import { LoginPage} from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import { LeadPage } from '../pages/leadpage';
import td from '../data/testdata.json';

test('TC03_Create_lead_with_mandatory_fields', async({page})=>{

    await page.goto('/');
    const loginpage = new LoginPage(page);
    await loginpage.login(td.TC03.username,td.TC03.password);
    const homepage = new HomePage(page);
    expect(homepage.verifyLogoutLink()).toBeTruthy();
    await homepage.clickNewLead();
    const leadpage = new LeadPage(page);
    await leadpage.createLead(td.TC03.lastname,td.TC03.company);
    await homepage.clickLogoutLink();


});

