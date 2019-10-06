/* Amazon Protractor Assignment
 * Sign in - Search for a product - verify if results of searched products are displayed
 * 
 * Author - Aishwarya Murugeasan 
 * 
 */


describe('Amazon Protractor Assignment', function() {
  
	it('Launch browser and navigate to sign in page', function() {
	  browser.waitForAngularEnabled(false);  
      browser.get('https://amazon.in');
      browser.driver.manage().window().maximize();
      element(by.id("nav-link-accountList")).click(); 
      element(by.cssContainingText('.nav-action-inner','Sign in')).click();      

  });
  
  var login_page = require('../Pages/LoginPage.js');
  it('Sign in', function(){
	  var usern = ""
	  login_page.username(usern);
	  login_page.ctnbtn();
	  var pass = ""
	  login_page.password(pass);
	  login_page.lgnbtn();
	  
  });
  
  var home_page = require('../Pages/HomePage.js');
  it('Home Page and search for a product', function(){
	  var item = "iPhone";
	  home_page.searchbox(item);
	  home_page.searchbtn();
	  var searchresult = home_page.searchresulttext();
	  expect(searchresult).toContain(item);
	  
	  
  });
  
});