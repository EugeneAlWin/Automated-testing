const { EnterDataField } = require('../pageobjects/enterDataField.js');
const { CompareField } = require('../pageobjects/compareStringsField.js');
const {
  CompareStringsField,
} = require('../pageobjects/compareStringsField.js');
const { OpenContacts } = require('../pageobjects/openContacts.js');
const { SearchGood } = require('../pageobjects/SearchGood.js');

const TestEnterDataField = async () => {
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
  await enterDataField.findElementByIdAndSendKeys('postform-name', 'helloweb');
  await enterDataField.driverSleep(5000);
  await enterDataField.driverQuit();
};

const TestCompareStringsField = async () => {
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
  await compareField.ClosePage();
};

const TestOpenContacts = async () => {
  const openContacts = new OpenContacts();
  await openContacts.driverGet('https://www.21vek.by/');
  await openContacts.findElementByXpathAndClick(
    '//*[@id="header"]/div/div[1]/div/div/ul[2]/div/div/div/button'
  );
  await openContacts.findElementByXpathAndClick(
    '//*[@id="header"]/div/div[1]/div/div/ul[2]/div/div/div/button'
  );
  await openContacts.findElementByXpathAndClick(
    '//*[@id="dropdownCommunications"]/ul/li[8]/a'
  );

  await openContacts.driverSleep(1000);
  await openContacts.assertContactsTitle();
  await openContacts.driverSleep(3000);
  await openContacts.driverQuit();
};

const TestSearchGood = async () => {
  const searchGood = new SearchGood();
  await searchGood.driverGet('https://www.21vek.by/');
  await searchGood.maximizeWindow();
  await searchGood.findElementByXpathAndClick(
    '//*[@id="7540305"]/div/span[1]/a'
  );
  await searchGood.driverSleep(3000);
  await searchGood.findElementByXpathAndClick(
    '//*[@id="j-item-buyzone"]/div[1]/form/button'
  );
  await searchGood.driverSleep(3000);
  await searchGood.findElementByXpathAndClick(
    '//*[@id="header"]/div/div[3]/div/div[4]/a'
  );
  await searchGood.checkXpathExists(
    '//*[@id="j-basket__items"]/tbody/tr/td[2]/a'
  );
  await searchGood.driverSleep(3000);
  await searchGood.driverQuit();
};
// TestEnterDataField();
TestCompareStringsField();
//TestOpenContacts();
//TestSearchGood();
