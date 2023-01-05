const { BasePage } = require('./basePage.js');
const { By } = require('selenium-webdriver');

class EnterDataField extends BasePage {
  constructor() {
    super();
  }

  async findElementByIdAndSendKeys(id, text) {
    await this.driver.findElement(By.id(id)).sendKeys(text);
  }
  async findElementByCssAndClick(css) {
    await this.driver.findElement(By.css(css)).click();
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

module.exports.EnterDataField = EnterDataField;
