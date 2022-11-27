const { Builder, By, until } = require('selenium-webdriver');
const { BasePage } = require('./basePage.js');

class CompareField extends BasePage {
  constructor(browser) {
    super(browser);
  }
  async getBrowser(url) {
    await this.driver.get(url);
  }

  async findElementIDandEnter(id, text) {
    await this.driver.findElement(By.id(id)).sendKeys(text);
  }

  async sleepDriver() {
    await this.driver.sleep(5000);
  }

  async WaitElementLocatedCSS(elemcss) {
    await this.driver.wait(until.elementLocated(By.css(elemcss), 100));
  }

  async WaitElementLocatedXpath(path) {
    await this.driver.wait(until.elementLocated(By.xpath(path), 10000));
  }

  async findElementCSSandClick(elemcss) {
    await this.driver.findElement(By.css(elemcss)).click();
  }

  async findElementXpathandClick(path) {
    await this.driver.findElement(By.xpath(path)).click();
  }

  async PageTitle(title) {
    let pageTitle = await this.driver.getTitle().then(function (title) {
      return title;
    });
    assert.strictEqual(
      pageTitle,
      'how to gain dominance among developers - Pastebin.com'
    );
  }

  async SyntaxHighlighting(path) {
    let syntaxHighlighting = await this.driver
      .findElement(By.xpath(path))
      .getText()
      .then(function (text) {
        return text;
      });
    assert.strictEqual(syntaxHighlighting, 'Bash');
  }

  async PasteData(path) {
    let pasteData = await this.driver
      .findElement(By.xpath(path))
      .getText()
      .then(function (text) {
        return text;
      });
    assert.strictEqual(
      pasteData,
      `git config --global user.name  "New Sheriff in Town"
        git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
        git push origin master --force`
    );
  }

  async ClosePage() {
    await this.driver.quit();
  }
}

module.exports.CompareField = CompareField;
