const BasePage = require('./Base.page')
class ProductDetail extends BasePage {
    constructor(page) {
        super(page)

        // selector for the product title
        this.productTitle = '#primary-details > div.mobile-selection.product-details-top-desktop > div.product-name-section > h2'
        this.productConsole = '#primary-details-row > div.product-variation-attributes > div.attribute.sibling-attribute.platform.form-group > a > div > span.attribute-value.platform-attribute-selector__value'
        this.newCondition = '#primary-details-row > div.product-variation-attributes > div.condition.sibling-attributes-redesign.mt-1 > div > div > div:nth-child(1) > div > span'
        this.addToCartBtn = '#add-to-cart'
        this.successCartModal = '.section-heading'
        this.goToCartBtn = '.view-cart-button'
    }

    async getProductTitle() {
        return (await this.page.locator(this.productTitle).innerText())
    }

    async getProductConsole() {
        return (await this.page.locator(this.productConsole).innerText())
    }

    // can make this more modular. Get both "condition cards" and pass parameter to select which condition you want based on array index
    async selectProductCondition() {
        await this.page.click(this.newCondition)
        return (await this.page.locator(this.newCondition).innerText()) 
    }

    async addToCart() {
        await this.page.click(this.addToCartBtn)
        let successModal = await this.page.locator(this.successCartModal)
        await successModal.isVisible()
        await this.page.click(this.addToCartBtn)
        return (await successModal.innerText())
    }

    async clickOnCart() {
    /*  the gamestop site has a "processing request" modal after adding item to cart
        this action forces the modal to temporarily disappear, and the target closes, so we need to initiate the selection again */
        let successModal = await this.page.locator(this.successCartModal)
        await successModal.isVisible()
        await this.page.click(this.goToCartBtn)
    }
}

module.exports = ProductDetail