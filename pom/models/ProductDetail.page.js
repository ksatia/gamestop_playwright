const BasePage = require('./Base.page')
class ProductDetail extends BasePage {
    constructor (page) {
        super(page)

        // selector for the product title
        this.productTitle = '#primary-details > div.mobile-selection.product-details-top-desktop > div.product-name-section > h2'
    }

    async getProductTitle() {
        let productTitle = await this.page.$(this.productTitle)
        console.log(productTitle)
        //return (await productTitle.innerText()) 
    }
}

module.exports = ProductDetail