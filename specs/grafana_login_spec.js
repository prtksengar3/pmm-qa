var global = require('../test_data/global_data.json')

describe('Grafana authentication tests', function() { 
var fail = function() { expect(true).toBe(false); }

  it('should redirect to the login page if trying to load protected page while not authenticated', function() {
    browser.driver.manage().deleteAllCookies();
    browser.get(browser.baseUrl + '/graph/dashboard/db/cross-server-graphs');
    browser.sleep(15000);
    browser.waitForAngular();
    browser.ignoreSynchronization = true;
    loginURL = browser.getCurrentUrl();

     
    expect(browser.getCurrentUrl()).toContain('login');
  });
  it('should warn on missing/malformed credentials', fail);
  it('should accept a valid email address and password', function() {
    browser.driver.manage().deleteAllCookies();
    browser.get(browser.baseUrl + '/graph/dashboard/db/cross-server-graphs');
    browser.sleep(15000);
    browser.waitForAngular();
 
element.all(by.name('username')).sendKeys('admin');
  //Enter Password
        element(by.name('password')).sendKeys('admin');
  //Click Submit button
        element(by.css('.gf-form-button-row button[type="submit"]')).click();
  //Wait for the current URL to change to welcome
        browser.driver.wait(function() {
            return browser.driver.getCurrentUrl().then(function(url) {
                return (/dashboard/).test(url);
            });
        });
  //Jasmine expect statement : compare actual and expected value
  expect(browser.getCurrentUrl()).toContain('dashboard/db/cross-server-graphs');
  });
  it('should return to the login page after logout', fail);

});
