
import {test,expect} from '@playwright/test';
import { LoginPage } from '../pages/loginpage';
import { HomePage } from '../pages/homepage';
import td from '../data/testdata.json';
//import {page} from 
 
test('TC01_invalid_Login_test', async({page}) => { 
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(td.TC01.username,td.TC01.password);
    await expect(loginPage.verifyErrorMsg()).toBeTruthy();


});

test('TC02_valid_Login_test', async({page}) => {
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(td.TC02.username,td.TC02.password);
    await expect(page.locator('//a[contains(text(), "Logout")]")]')).toBeVisible;
    const homePage = new HomePage(page);
    await expect(homePage.verifyHomeLink()).toBeTruthy();

});

test('TC014_invalid_Login_test', async({page}) => { 
    await page.goto('/');
    const loginPage = new LoginPage(page);
    await loginPage.login(td.TC01.username,td.TC01.password);
    await expect(loginPage.verifyErrorMsg()).toBeTruthy();


});
