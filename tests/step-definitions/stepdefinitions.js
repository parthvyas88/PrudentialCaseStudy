const {Given, When, Then} = require("cucumber"); 

	var title = browser.getTitle();
	var Searchbox = '#q';
	var SearchButton = '//form[@id="searchform"]//button[@type="submit"]';
	var Results = '//div[@id="forecast_list_ul"]';
	var errorMsg = '//div[@class="alert alert-warning"]';

Given(/^User opens OpenWeatherMap Website$/, () => {
   browser.url("https://openweathermap.org");
   browser.getTitle().should.equal('Сurrent weather and forecast - OpenWeatherMap');
   console.log("Opening Search Page on OpenWeatherMap");
});

Given(/^User is on Search Page$/, () => {
   browser.url("https://openweathermap.org");
   browser.getTitle().should.equal('Сurrent weather and forecast - OpenWeatherMap');
   console.log("Search Page Opened");
});

When(/^User enters invalidcity into search field$/, (invlidcityname) => {
    browser.waitForEnabled('#q', 500)
    	.then(browser.setValue('#q',"asdf"));
    browser.waitForExist('//form[@id="searchform"]//button[@type="submit"]',5000)
    	.then(browser.click('//form[@id="searchform"]//button[@type="submit"]'));
    	
    console.log("Invalid city entered.");
    
});

When(/^User enters validcity into search field$/, () => {
    browser.waitForVisible('#q', 5000)
    	.then(browser.setValue('#q',"MUMBAI"));    	    
    	
    browser.click('//form[@id="searchform"]//button[@type="submit"]');	
	console.log("User enters validcity into search field");
    
});

Then(/^Page is loaded successfully$/, () => {    

     browser.waitForExist('#q', 5000);
     browser.waitForExist('//form[@id="searchform"]//button[@type="submit"]', 5000);
     console.log("Page is loaded successfully.");

});

Then(/^Error Message is displayed$/, () => {

    browser.waitForVisible('//div[@class="alert alert-warning"]', 5000)
    	.then(browser.getText('//div[@class="alert alert-warning"]').should.equal('Not found'));
    	console.log("Error Messages are displayed. ");
});

Then(/^Weather Reports are displayed$/, () => {
	browser.isVisible(Results);
	browser.waitForVisible(Results,5000);
    console.log("Inside Weather reports are displayed. ");
});