var graphMainDash = require('../page_objects/graphMainDash.po.js')
var graphPO = require('../page_objects/graphMongoMMVAP1Dash.po.js')

describe('MongoMMVAP1 Dashboards tests', function() {
  beforeEach(function () {
    browser.get(browser.baseUrl +'/graph');
    browser.ignoreSynchronization = true;
    browser.sleep(15000);
    browser.wait(function() {
      return browser.driver.getCurrentUrl().then(function(url) {
        return /cross-server-graphs/.test(url);
      });
    });
      browser.sleep(60000);
      expect(browser.getTitle()).toEqual('Grafana - Cross Server Graphs');
  });

  afterEach(function () {

  });


  it('should check charts titles of MongoDB MMAPv1 dashboards', function() {
    graphMainDash.clickOpenSearch();
   // graphMainDash.searchDashboard("MongoDB MMAPv1");
   // expect(browser.getCurrentUrl()).toContain('dashboard/db/mongodb-mmapv1');
   /* browser.sleep(25000);
    expect(graph.ariaPageCacheTitle().isDisplayed()).toBeTruthy();
  it('should check charts titles', function() {
    graphMainDash.clickOpenSearch();
    graphMainDash.searchDashboard("MongoDB MMAPv1");
    expect(browser.getCurrentUrl()).toContain('dashboard/db/mongodb-mmapv1');
    browser.sleep(25000);
    /*expect(graphPO.ariaPageCacheTitle().isDisplayed()).toBeTruthy();
    expect(graphMariaDb.ariaTransactTitle().isDisplayed()).toBeTruthy();
    expect(graphMariaDb.ariaPageTitle().isDisplayed()).toBeTruthy();
    expect(graphMariaDb.innodbOnlineTitle().isDisplayed()).toBeTruthy();
    expect(graphMariaDb.innodbDefrTitle().isDisplayed()).toBeTruthy();
    expect(graphMariaDb.innodbCondTitle().isDisplayed()).toBeTruthy();
    expect(graphMariaDb.innodbDeadTitle().isDisplayed()).toBeTruthy();
 */ });
 
});
