var graphMainDash = require('../../page_objects/graphMainDash.po.js')
var data = require('../../test_data/grafana_data.json')
var utils = require('../../common/utils.js')

describe('MySQL Command/Handler Counters Compare dashboard tests', function() {
  beforeEach(function () {
    browser.get(browser.baseUrl+'/graph');
    browser.ignoreSynchronization = true;
    browser.sleep(15000);
       browser.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /home-dashboard/.test(url);
      });
    });
    browser.sleep(20000);
    expect(browser.getTitle()).toEqual('Grafana - Home Dashboard');
  });

  afterEach(function () {
  });

  it('should search dashboard', function() {
    graphMainDash.clickOpenSearch();
    //graphMainDash.searchDashboard("MySQL Overview");
    graphMainDash.searchDashboard("MySQL Command/Handler Counters Compare");
    expect(browser.getCurrentUrl()).toContain('mysql-command-handler-counters-compare');
    expect(element(by.xpath('//div[contains(text(),"404 Error")]')).isPresent()).toEqual(false);
  });

});
