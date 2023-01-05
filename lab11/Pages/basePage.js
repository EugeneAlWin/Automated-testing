class BasePage {
  constructor() {
    this.edge = require('selenium-webdriver/edge');
    this.service = new this.edge.ServiceBuilder().setPort(0).build();
    this.options = new this.edge.Options();
    // set log info
    this.logging = require('selenium-webdriver').logging;
    this.loggingPreferences = new this.logging.Preferences();
    this.loggingPreferences.setLevel(
      this.logging.Type.BROWSER,
      this.logging.Level.INFO
    );
    this.options.setLoggingPrefs(this.loggingPreferences);
    this.driver = this.edge.Driver.createSession(this.options, this.service);
  }
  async driverGet(url) {
    await this.driver.get(url);
  }
  async findElementByXpathAndClick(xpath) {
    await this.driver.findElement(By.xpath(xpath)).click();
  }
  async driverSleep(time) {
    await this.driver.sleep(time);
  }

  async driverQuit() {
    await this.driver.quit();
  }
}

module.exports.BasePage = BasePage;
