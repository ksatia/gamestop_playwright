const BasePage = require('./Base.page')
class CheckoutPage extends BasePage {
    constructor(page) {
        super(page)

        // locators
        this.productName = '.product-name > a'
        this.productQuantity = '#quantity'
        this.todayDeliveryBtn = '.shipping-option-label small font-bold disabled'
        this.addressModal = '.modal-body'
        this.addressModalStreet = '#address1'
        this.addressModalCity = '#city'
        this.addressModalStateDrp = '#state'
        this.addressModalZip = '#zipCode'
        this.subTotal
    }

    async getProductName() {
        return (await this.page.locator(this.productName).innerText())
    }

    async getProductQuantity() {
        return (await this.page.locator(this.productQuantity).locator('option').nth(0)).innerText()
    }

    async setDeliveryTime() {
        await this.page.click(this.todayDeliveryLabel)
//getByText('New', {exact: true}).nth(1).click()
// await page.getByRole('button', { name: 'View Cart & Checkout' }).click();



        // enter address into fields
        // let addressModalFields = await this.page.locator(this.addressModal)
        // await successModalFields.isVisible()
        // await this.page.fill(this.addressModalStreet, '300 E 93rd Street')
        // await this.page.fill(this.addressModalCity, 'Brooklyn')
        
        // click "verify address"
        // verify that the radio isChecked()

       //return (await this.page.locator(this.deliveryTimeOptions, { has: await this.page.locator('role=radio') }))
    }


}

module.exports = CheckoutPage

/*
