// God of War Ragnarok - PlayStation 5 use page.getByText(gameTitle)
const BasePage = require('./Base.page');

class ProductCollection extends BasePage {
    constructor(page) {
        super(page);

        this.productName = '#product-search-results > div.align-items-start.flex-nowrap.flex-column.flex-md-row > div > div.row.product-grid > div.row.infinitescroll-results-grid.product-grid-redesign.wide-tiles > div:nth-child(6) > div > div > div.image-container.col-4.col-sm-auto > a'
    }

    async navigate () {
        await super.navigate();
    }

    async clickOnProduct() {
        await this.page.click(this.productName)
    }

}

module.exports = ProductCollection
