const { chromium } = require('playwright');
const HomePage = require('../models/Home.page');

describe('Gamestop demo purchase test', () => {
    // jest.setTimeout(30000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;
    let loginPage = null;

    beforeAll(async () => {
        browser = await chromium.launch({ headless: false, slowMo: 300 });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        await homePage.navigate();
    })

    afterAll(async () => {
        await context.close();
        await browser.close();
    })

    it('should navigate to GameStop homepage', async () => {
        expect(await page.title()).not.toBeNull();
    })

    it('should enter search query into the product search field', async () => {
        await homePage.searchForGame('God of War')
        expect(await page.title()).not.toBeNull();
    })

    it('should execute the search query', async () => {
        await homePage.executeSearch()
        expect(await page.title()).not.toBeNull()
    })

    it('should verify that search page is rendered', async () => {
        expect(await page.url()).toMatch(/search/)
    })

    it('should check that the query parameters match the intended search query', async () => {
        // cannot figure out the regex for full query params so just used the above test
    })

    it('should be on the results page for God of War', async () => {
        expect(await page.title()).toBe('God of War | Search Results | GameStop')
    })

    it('should click on a desired product', async () => {
        
    })

    it('should be for the playstation console', async () => {

    })

    it('should have new selected for product condition', async () => {

    })


})

/*
// models
product description page class
    selector for title, ps5, maybe query param, etc, "new" option, add to cart
    function for getting inner text of title, console, clicking the new buton, clicking add to cart
checkout page class
    navigating to checkout page
    filling in details -> do the rest first
    

// tests(specs)
verify that homepage is gamestop home page (page title is not null)
on typing in god of war - assert page title is not null
verify that you are on a search results page (figure out what that looks like)

verify query param in title OR verify wherever god of war is typed out

clicking on product - verify it is for ps5, that title is god of war, maybe snapshot
comparison for box art


*/