const assert = require('assert');
const { Steps } = require('../Steps/Steps.js');

const steps = new Steps();
(async () => {
  steps.initBrowser();
  await steps.maximizeWindow();
  //Test 1
  assert.strictEqual(
    await steps.testContactsPageOpenAndGetPageName(),
    'Контакты'
  );
  //Test 2
  assert.strictEqual(await steps.TestSearchGood(), true);
  //Test 3
  assert.strictEqual(await steps.TestSearchSofa(), true);
  //Test 4
  assert.strictEqual(await steps.TestSearchField(), true);
  //Test 5
  assert.strictEqual(await steps.TestDeleteGood(), true);
  //Test 6
  assert.strictEqual(await steps.TestClearForm(), true);
  //Test 7
  assert.strictEqual(await steps.TestBonusProgram(), true);

  //Test 8-9
  assert.strictEqual(await steps.TestEnterDataField(), true);
  assert.strictEqual(await steps.TestCompareStringsField(), true);
  await steps.closeBrowser();
})();
