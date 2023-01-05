class DriverInstance {
  static driver = null;

  static getInstance() {
    if (DriverInstance.driver == null) {
      this.edge = require('selenium-webdriver/edge');
      this.service = new this.edge.ServiceBuilder().setPort(0).build();
      this.options = new this.edge.Options();
      DriverInstance.driver = this.edge.Driver.createSession(
        this.options,
        this.service
      );
    }
    return DriverInstance.driver;
  }
  static async closeBrowser() {
    await DriverInstance.driver.quit();
  }
}

module.exports = DriverInstance;
