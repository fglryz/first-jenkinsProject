import { test,expect } from '@playwright/test'

test('You tube search', async ({ page }) => {

    await page.goto('https://www.youtube.com')

    await page.waitForTimeout(3000);

   const acceptButton =  page.getByLabel('Accept the use of cookies and other data for the purposes described')
   acceptButton.click()
    await page.waitForTimeout(3000);
    //const searchBox =  page.locator("//input[@name='search_query' and @role='combobox']")
    const searchBox =  page.getByRole('combobox', { name: 'Search' })
    await page.waitForTimeout(3000);
    await searchBox.fill("Cydeo")

    await page.waitForTimeout(3000);

    await searchBox.press('Enter')

    await page.waitForTimeout(3000);
   //const firstVideo =  page.getByRole('link', { name: 'Introduction to SDET' })
   const firstVideoResult =  page.locator("//a[@class='yt-lockup-metadata-view-model-wiz__title']").first()
    
   await firstVideoResult .click()
   expect(firstVideoResult,'Introduction to SDET')

 
});