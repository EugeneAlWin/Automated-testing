// Bring It On

const { Builder, By, until } = require('selenium-webdriver');
// const {describe, it, after, before} = require ('selenium-webdriver/testing');
const assert = require('assert');

async function noNameYet() {
  // Open the browser
  var edge = require('selenium-webdriver/edge');
  var service = new edge.ServiceBuilder().setPort(55555).build();
  var options = new edge.Options();
  // configure browser options ...
  var driver = edge.Driver.createSession(options, service);
  await driver.manage().window().maximize();
  // Navigate to the page
  await driver.get('https://www.21vek.by/');

  await driver
    .findElement(
      By.xpath('//*[@id="header"]/div/div[1]/div/div/ul[2]/div/div/div/button')
    )
    .click();

  await driver
    .findElement(
      By.xpath('//*[@id="header"]/div/div[1]/div/div/ul[2]/div/div/div/button')
    )
    .click();

  await driver
    .findElement(By.xpath('//*[@id="dropdownCommunications"]/ul/li[8]/a'))
    .click();

  await driver
    .findElement(
      By.xpath(
        '//span[@class="select2-results"]/ul[@class="select2-results__options"]/li[text()="10 Minutes"]'
      )
    )
    .click();

  await driver.sleep(1000);
  let pageTitle = await driver.getTitle().then(function (title) {
    return title;
  });
  assert.strictEqual(pageTitle, 'Контакты');
}
noNameYet();
