const { webkit } = require('playwright');
const HomePage = require('../pom/models/Home.page')
const ProductCollection = require('../pom/models/ProductCollection.page')
const ProductDetail = require('../pom/models/ProductDetail.page')
const Checkout = require('../pom/models/Checkout.page')

describe('Gamestop demo purchase test', () => {
    jest.setTimeout(20000);
    let browser = null;
    let context = null;
    let page = null;
    let homePage = null;

    beforeAll(async () => {
        //, slowMo: 300 
        browser = await webkit.launch({ headless: false });
        context = await browser.newContext();
        page = await context.newPage();
        homePage = new HomePage(page);
        productCollectionPage = new ProductCollection(page);
        productDetailsPage = new ProductDetail(page);
        checkoutPage = new Checkout(page);
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
        await productCollectionPage.clickOnProduct()
        expect(await page.title()).toBe('God of War Ragnarok - PS5 | PlayStation 5 | GameStop')
    })

    it('should have the correct product name on the details page', async () => {
        expect(await productDetailsPage.getProductTitle()).toBe('God of War Ragnarok Standard Edition - PlayStation 5')
    })

    it('should be for the playstation console', async () => {
        expect(await productDetailsPage.getProductConsole()).toBe('PlayStation 5')
    })

    it('should have new selected for product condition', async () => {
        expect(await productDetailsPage.selectProductCondition()).toBe('New')
    })

    it('should add product to cart', async () => {
        expect(await productDetailsPage.addToCart()).toBe('Added to Cart')
    })

    it('should navigate to the checkout page', async () => {
        await productDetailsPage.clickOnCart()
        expect (await page.title()).toBe('Cart | GameStop')
    })

    it('should have the correct product in cart', async() => {
        expect(await checkoutPage.getProductName()).toBe('God of War Ragnarok Standard Edition - PlayStation 5')
    })

    it('should not have more than one copy of product in cart', async () => {
        expect(await checkoutPage.getProductQuantity()).toBe('Qty 1')
    })
    
    it('should have delivery set to today', async () => {
        await checkoutPage.setDeliveryTime()
    })

})

/*
// models
product description page class
checkout page class
    filling in details -> do the rest first
    

// tests(specs)

clicking on product - verify it is for ps5, that title is god of war, maybe snapshot
comparison for box art

just call method to fill in fields, assert that the fields are actually filled up


*/