class BasePage {
  constructor() {
    this.edge = require('selenium-webdriver/edge');
    this.service = new this.edge.ServiceBuilder().setPort(0).build();
    this.options = new this.edge.Options();
    this.driver = this.edge.Driver.createSession(this.options, this.service);
  }
  async driverGet(url) {
    await this.driver.get(url);
  }
}

module.exports.BasePage = BasePage;
