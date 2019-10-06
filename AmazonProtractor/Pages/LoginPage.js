/* Elements - Home page to sign in page 
 * 		    - Username, Password, Login button, Continue button
 * 
 * Author - Aishwarya Murugeasan
 * 
 */

var login_page = function(){
	
	this.signinlink = function(){
		element(by.id("nav-link-accountList")).click();
	}
	
	this.signinbtn = function(){
		element(by.xpath('//*[@id="nav-flyout-ya-signin"]/a/span')).click();
	}	
	
	this.username = function(value){
		element(by.id("ap_email")).sendKeys(value);
	}
	
	this.password = function(value){
		element(by.id("ap_password")).sendKeys(value);
	}
	
	this.ctnbtn = function(){
		element(by.id("continue")).click();
	}
	
	this.lgnbtn = function(){
		element(by.id("signInSubmit")).click();
	}
	
};
module.exports = new login_page();
