/* Elements - Home page 
 * 		    - Search items
 * 
 * Author - Aishwarya Murugeasan
 * 
 */


var home_page = function(){
	
	this.searchbox = function(value){
		element(by.id("twotabsearchtextbox")).sendKeys(value);
	}
	
	this.searchbtn = function(){
		element(by.css('#nav-search > form > div.nav-right > div > input')).click();
	}
	
	this.searchresulttext = function(){
		
		return element(by.className('a-color-state a-text-bold')).getText();
	}
	
	
	
	
};
module.exports = new home_page();