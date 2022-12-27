const DriverInstance = require('../Driver/Driver.js');
const { EnterDataField } = require('../Pages/enterDataField.js');
const { CompareField } = require('../Pages/compareStringsField.js');
const { OpenContacts } = require('../Pages/openContacts.js');
const { SearchGood } = require('../Pages/SearchGood.js');
const { SearchSofa } = require('../Pages/SearchSofa.js');
const { SeachFieldTest } = require('../Pages/SeachFieldTest.js');
const { DeleteGood } = require('../Pages/DeleteGood.js');
const { ClearForm } = require('../Pages/ClearForm.js');
const { BonusProgram } = require('../Pages/BonusProgram.js');
class Steps {
  initBrowser() {
    this.driver = DriverInstance.getInstance();
  }
  async closeBrowser() {
    this.driver = await DriverInstance.closeBrowser();
  }
  async maximizeWindow() {
    await DriverInstance.driver.manage().window().maximize();
  }
  async sleep(time = 1000) {
    await this.driver.sleep(time);
  }
  //test 1
  async testContactsPageOpenAndGetPageName() {
    const openContacts = new OpenContacts();
    await openContacts.driverGet('https://www.21vek.by/');
    await openContacts.findElementByXpathAndClick(
      '//*[@id="header"]/div/div[3]/div/div/ul[2]/div/div/div/button'
    );

    await openContacts.findElementByXpathAndClick(
      '//*[@id="dropdownCommunications"]/ul/li[8]/a'
    );

    await openContacts.driverSleep(1000);
    let pagetitle = await openContacts.assertContactsTitle();
    await openContacts.driverSleep(3000);
    await openContacts.driverQuit();
    return pagetitle;
  }
  async getContactPageTitle() {
    return this.contactPage.getPageTitle();
  }

  TestSearchGood = async () => {
    const searchGood = new SearchGood();
    await searchGood.driverGet('https://www.21vek.by/');
    await searchGood.maximizeWindow();
    await searchGood.findElementByXpathAndClick(
      '//*[@id="7923772"]/div/span[1]/a'
    );
    await searchGood.driverSleep(3000);
    await searchGood.findElementByXpathAndClick(
      '//*[@id="j-item-buyzone"]/div[1]/form/button'
    );
    await searchGood.driverSleep(3000);
    await searchGood.findElementByXpathAndClick(
      '//*[@id="header"]/div/div[5]/div/div[4]/a'
    );
    let res = await searchGood.checkXpathExists(
      '//*[@id="j-basket__items"]/tbody/tr/td[2]/a'
    );
    await searchGood.driverSleep(3000);
    await searchGood.driverQuit();
    return res;
  };

  async TestSearchSofa() {
    const searchSofa = new SearchSofa();
    await searchSofa.driverGet('https://www.21vek.by/');
    await searchSofa.maximizeWindow();
    await searchSofa.findElementByXpathAndClick(
      '//*[@id="header"]/div/div[6]/div/div[1]/ul/li[10]/a'
    );
    await searchSofa.driverSleep(3000);
    await searchSofa.insertTextInSearchField(
      '//*[@id="j-filter__form"]/div[1]/dl/dd/label[1]/span/input',
      '50'
    );
    await searchSofa.insertTextInSearchField(
      '//*[@id="j-filter__form"]/div[1]/dl/dd/label[2]/span/input',
      '600'
    );
    await searchSofa.findElementByXpathAndClick('//*[@id="j-filter__btn"]');
    await searchSofa.driverSleep(6000);
    await searchSofa.driverQuit();
    return true;
  }
  async TestSearchField() {
    const seachFieldTest = new SeachFieldTest();
    await seachFieldTest.driverGet('https://www.21vek.by/');
    await seachFieldTest.maximizeWindow();
    await seachFieldTest.insertTextInSearchField(
      '//*[@id="catalogSearch"]',
      'Тестовая фраза для проверки поля'
    );
    await seachFieldTest.driverSleep(6000);
    await seachFieldTest.driverQuit();
    return true;
  }
  async TestDeleteGood() {
    const deleteGood = new DeleteGood();
    await deleteGood.driverGet('https://www.21vek.by/');
    await deleteGood.maximizeWindow();
    await deleteGood.findElementByXpathAndClick(
      '//*[@id="7923772"]/div/span[1]/a'
    );
    await deleteGood.driverSleep(3000);
    await deleteGood.findElementByXpathAndClick(
      '//*[@id="j-item-buyzone"]/div[1]/form/button'
    );
    await deleteGood.driverSleep(3000);
    await deleteGood.findElementByXpathAndClick(
      '//*[@id="header"]/div/div[5]/div/div[4]/a'
    );

    await deleteGood.driverSleep(3000);
    await deleteGood.findElementByXpathAndClick('//*[@id="j-delete-13422369"]');

    await deleteGood.driverSleep(3000);
    await deleteGood.driverQuit();
    return true;
  }
  async TestClearForm() {
    const clearForm = new ClearForm();
    await clearForm.driverGet('https://www.21vek.by/');
    await clearForm.maximizeWindow();
    await clearForm.findElementByXpathAndClick(
      '//*[@id="header"]/div/div[6]/div/div[1]/ul/li[10]/a'
    );
    await clearForm.driverSleep(3000);
    await clearForm.insertTextInSearchField(
      '//*[@id="j-filter__form"]/div[1]/dl/dd/label[1]/span/input',
      '50'
    );
    await clearForm.insertTextInSearchField(
      '//*[@id="j-filter__form"]/div[1]/dl/dd/label[2]/span/input',
      '600'
    );
    await clearForm.findElementByXpathAndClick('//*[@id="j-filter__btn"]');
    await clearForm.driverSleep(4000);
    await clearForm.findElementByXpathAndClick('//*[@id="j-reset"]');
    await clearForm.driverSleep(4000);
    await clearForm.driverQuit();
    return true;
  }
  async TestBonusProgram() {
    const bonusProgram = new BonusProgram();
    await bonusProgram.driverGet('https://www.21vek.by/');
    await bonusProgram.maximizeWindow();
    await bonusProgram.findElementByXpathAndClick(
      '//*[@id="header"]/div/div[3]/div/div/ul[1]/li[2]/a'
    );
    await bonusProgram.driverSleep(3000);
    await bonusProgram.findElementByXpathAndClick(
      '//*[@id="footer-inner"]/div/div/div[1]/div[2]/div[4]/a'
    );
    await bonusProgram.driverSleep(3000);
    await bonusProgram.findElementByXpathAndClick(
      '//*[@id="react-static-page"]/div/div[2]/div[2]/div/div[2]/section[2]/div[3]/div[1]/div[2]/div[5]/span[4]'
    );
    await bonusProgram.findElementByXpathAndClick(
      '//*[@id="react-static-page"]/div/div[2]/div[2]/div/div[2]/section[2]/div[3]/div[2]/div[2]/div[5]/span[4]'
    );
    await bonusProgram.driverSleep(4000);
    await bonusProgram.driverQuit();
    return true;
  }
  // My tests end

  async TestCompareStringsField() {
    const compareField = new CompareField();
    await compareField.getBrowser('https://pastebin.com');
    await compareField.findElementIDandEnter(
      'postform-text',
      `git config --global user.name  "New Sheriff in Town"
    git reset $(git commit-tree HEAD^{tree} -m "Legacy code")
    git push origin master --force`
    );
    await compareField.sleepDriver();
    await compareField.WaitElementLocatedCSS('.active-path');
    await compareField.findElementCSSandClick('.active-path');
    await compareField.findElementCSSandClick(
      '.toggle__control > label:nth-child(2)'
    );
    await compareField.findElementXpathandClick(
      '//*[@id="select2-postform-format-container"]'
    );
    await compareField.findElementXpathandClick(
      '(//ul[@class="select2-results__options select2-results__options--nested"]/*[.="Bash"])[1]'
    );
    await compareField.findElementCSSandClick(
      'div.form-group.field-postform-expiration span.select2-selection__arrow'
    );
    await compareField.findElementXpathandClick(
      '//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]'
    );
    await compareField.findElementIDandEnter(
      'postform-name',
      'how to gain dominance among developers'
    );
    await compareField.WaitElementLocatedXpath('//button[@class="btn -big"]');
    await compareField.findElementXpathandClick('//button[@class="btn -big"]');
    await compareField.sleepDriver();
    await compareField.WaitElementLocatedXpath(
      '(//a[@class="btn -small h_800"])[1]'
    );
    await compareField.WaitElementLocatedXpath(
      '(//a[@class="btn -small h_800"])[1]'
    );
    //get logs
    const logs = await compareField.driver.manage().logs().get('browser');
    console.log(logs);
    await compareField.driver.quit();
    return true;
  }
  async TestEnterDataField() {
    const enterDataField = new EnterDataField();
    await enterDataField.driverGet('https://pastebin.com');
    await enterDataField.findElementByIdAndSendKeys(
      'postform-text',
      'Hello from WebDriver'
    );
    await enterDataField.findElementByCssAndClick(
      'div.form-group.field-postform-expiration span.select2-selection__arrow'
    );
    await enterDataField.findElementByXpathAndClick(
      '//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]'
    );
    await enterDataField.findElementByIdAndSendKeys(
      'postform-name',
      'helloweb'
    );

    await enterDataField.driverSleep(5000);
    await enterDataField.driverQuit();
    return true;
  }
}

module.exports.Steps = Steps;
