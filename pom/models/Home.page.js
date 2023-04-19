const BasePage = require('./Base.page');

class HomePage extends BasePage {
    constructor(page) {
        super(page);

    // selector for input field
    this.searchField = '#searchRedesignTemplateInput'
    // selector for search button
    this.searchButton = '#searchRedesignTemplate > div.input-group > div > button'
    }

    async navigate () {
        await super.navigate();
    }

    async searchForGame (gameTitle) {
        await this.page.fill(this.searchField, gameTitle)
    }

    async executeSearch () {
        await this.page.click(this.searchButton)
    }
}

module.exports = HomePage