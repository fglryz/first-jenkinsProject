import { test, expect } from '@playwright/test';

test.describe('Test Group', () => {
    //create beforeEach
    test.beforeEach(async ({ page }) => {
        // Navigate to the page before each test
        await page.goto('https://practice.cydeo.com');

    
    });

    //create afterEach
    test('Check() checks the radio buttons and checkboxes if they have not been checked', async ({ page }) => {
        const checkBoxLink = page.locator("text='Checkboxes'")
        //const  checkBoxLink= page.getByRole('link', { name: 'Checkboxes' })
        await checkBoxLink.click()
        // const checkBoxLink = page.locator("text='Checkboxes'")
        // await checkBoxLink.click()
        const checkBox1 = page.locator("#box1")
        await checkBox1.check()
        expect(await checkBox1.isChecked()).toBe(true)
        // Add test logic here
    });

    test('UnCheck() unchecks the radio buttons and checkboxes if they have not been unchecked yet', async ({ page }) => {
        const checkBoxLink = page.locator("text='Checkboxes'")
        //const  checkBoxLink= page.getByRole('link', { name: 'Checkboxes' })
        await checkBoxLink.click()
        const checkBox2 = page.locator("#box2")
        await checkBox2.uncheck()
        expect(checkBox2.isChecked).not.toBe(false)
        // Add test logic here
    });

    test('Select Option() used for dropdowns', async ({ page }) => {
        page.locator("text='Dropdown'").click()
        //const  checkBoxLink= page.getByRole('link', { name: 'Checkboxes' })
        await page.waitForTimeout(3000)
        const simpleDropdown = page.locator('#dropdown')
        simpleDropdown.click()
        await page.waitForTimeout(3000)
        //select by value
        // await simpleDropdown.selectOption('1')

        //select by visible text
        //await simpleDropdown.selectOption({label:'Option 2'})

        //select by visible index
        await simpleDropdown.selectOption({ index: 2 })
    });
    test('inner Text() retrieves the visible text', async ({ page }) => {
        const headerElement = page.getByText('Test Automation Practice')
        const actualText = await headerElement.innerText()
        console.log(actualText);

      // Add test logic here
    });
    //create a test
    test('inputValue) :only used used with <input>, <select>,<textarea>', async ({ page }) => {
        page.getByText('Inputs').click()
        // const inputsLink = await page.getByText('Inputs')
        // await inputsLink.scrollIntoViewIfNeeded()//there is noo need to scroll since playwrigt do it
        // inputsLink.click()
     
       const inputBox =  page.locator('//input[@type="number"]')
       //pause 3 seconds only
       await page.waitForTimeout(3000)
      
     
       inputBox.fill('123')
       await page.waitForTimeout(3000)
       const inputValue = await inputBox.inputValue()

     console.log(inputValue)
       
    });
    // Add test logic here









    // Add test logic here
});

