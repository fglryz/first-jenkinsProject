import { test,expect } from '@playwright/test';

test.describe('Test Group1',()=>{

test.beforeAll(async()=>{
    console.log('beforeAll is expected');

})
test.afterAll(async()=>{

    console.log('afterAllis expected');
})
test.beforeEach(async()=>{
    console.log('beforeEach is expected');

})
test.afterEach(async()=>{

    console.log('afterEachis expected');
})



test('Test Case1', async ({ page }) => {
   
console.log('Test Case1 is expected');
   
});
test('Test Case2', async ({ page }) => {
    console.log('Test Case2 is expected');
    
});
test('Test Case3', async ({ page }) => {
    console.log('Test Case3 is expected');
   
})

});

