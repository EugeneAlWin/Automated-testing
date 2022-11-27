const { BasePage } = require('./basePage.js');
const { By } = require('selenium-webdriver');
const assert = require('assert');

class SearchGood extends BasePage {
  constructor() {
    super();
  }

  async maximizeWindow() {
    await this.driver.manage().window().maximize();
  }
  async findElementByXpathAndClick(xpath) {
    await this.driver.findElement(By.xpath(xpath)).click();
  }
  async driverSleep(time) {
    await this.driver.sleep(time);
  }
  //check xpath exists if not return false
  async checkXpathExists(xpath) {
    let res = false;
    try {
      await this.driver.findElement(By.xpath(xpath));
      res = true;
      assert.strictEqual(res, true);
    } catch (e) {
      res = false;
      assert.strictEqual(res, true);
    }
  }
  async driverQuit() {
    await this.driver.quit();
  }
}

module.exports.SearchGood = SearchGood;
