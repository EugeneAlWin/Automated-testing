const { BasePage } = require('./basePage.js');
const { By } = require('selenium-webdriver');
const assert = require('assert');

class OpenContacts extends BasePage {
  constructor() {
    super();
  }

  async findElementByXpathAndClick(xpath) {
    await this.driver.findElement(By.xpath(xpath)).click();
  }
  async driverSleep(time) {
    await this.driver.sleep(time);
  }
  async assertContactsTitle() {
    let pageTitle = await this.driver.getTitle().then(function (title) {
      return title;
    });
    assert.strictEqual(pageTitle, 'Контакты');
  }

  async driverQuit() {
    await this.driver.quit();
  }
}

module.exports.OpenContacts = OpenContacts;
