const BasePage = require('./Base.page')
class UserCart extends BasePage {
    constructor(page) {
        super(page)

        // locators
        this.productName = '#bonusProductLineItem > div.row > div:nth-child(1) > div > div.main-item-info > div.product-details > div > div.product-name > a'
        this.productQuantity = '#quantity'
        this.todayDeliveryBtn = '.shipping-option-label small font-bold disabled'
        this.addressModal = '.modal-body'
        this.addressModalStreet = '#address1'
        this.addressModalCity = '#city'
        this.addressModalStateDrp = '#state'
        this.addressModalZip = '#zipCode'
        // using class for subTotal doesn't work - WHY? had to use selector pulled from the browser.
        this.subTotal = '.text-right font-bold sub-title-os cart-subtotal'
        this.proceedToCheckoutBtn = ".mb-2 mx-0 btn btn-primary btn-block checkout-btn "
        this.guestCheckoutBtn = ".btn checkout-as-guest"
    }

    async getProductName() {
        return (await this.page.locator(this.productName).innerText())
    }

    async getProductQuantity() {
        return (await this.page.locator(this.productQuantity).locator('option').nth(0)).innerText()
    }

    async getCartSubtotal() {
        return (await this.page.locator(('#ae-main-content > div.container.p-0.m-0.row.cart-rd > div.mt-3.col-12.col-lg-3.totals.cart-rd.mt-lg-0 > div.row.p-2.bg-white.mb-3 > div.col.cart-order-summary > div:nth-child(2) > div.col-4 > p'))).innerText()
        //return (await this.page.locator(this.subTotal)).getInnerText()
    }

    async proceedToCheckout() {
        await this.page.getByRole('link', {name: 'Proceed To Checkout'}).click()
    }

    async checkoutAsGuest() {
        await this.page.getByRole('link', { name: 'Guest checkout' }).click()
    }

/*
    // skip for now - selector for "today delivery" modal is tricky. go with default shipping option.
    async setDeliveryTime() {
        await this.page.click(this.todayDeliveryLabel)
    }
*/

}

module.exports = UserCart
