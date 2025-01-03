import { test, expect } from '@playwright/test';

test.describe('@smoke Test Group', () => {
    //creater beforeEach for test 
    test.beforeEach(async ({ page }) => {
        // Navigate to the page before each test
        await page.goto('https://practice.cydeo.com');

    })
    //create afterEach for test      
    test.afterEach(async ({ page }) => {
        // Close the browser after each test
        await page.waitForTimeout(3000)
    });


    test('Getting title of page', async ({ page }) => {
        const actualTitle = await page.title();
        console.log(actualTitle);
        //expect(actualTitle).toEqual("Practice")
        expect(actualTitle).toBe("Practice")
    });

    test('getting the current url of the page', async ({ page }) => {
        const actualUrl = page.url();
        console.log(actualUrl);
        expect(actualUrl).toEqual("https://practice.cydeo.com/")
        //expect(actualUrl).toContain("https://practice.cydeo.com")
        // expect(actualUrl).toBe("https://practice.cydeo.com/")
    });

    test('Set the window size', async ({ page }) => {
        await page.setViewportSize({ width: 1850, height: 1080 });
        const actualWindowSize = page.viewportSize();
        console.log(actualWindowSize);
        expect(actualWindowSize).toEqual({ width: 1850, height: 1080 })
    });
});



