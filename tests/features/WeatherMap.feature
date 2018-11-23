Feature: Checking weather for different cities on OpenWeatherMap
	
	As a User, I want to visit OpenWeatherMap page and 
	search for weather for different cities
	
    Scenario: Page is opened
	    Given User opens OpenWeatherMap Website
	    Then Page is loaded successfully
	

	Scenario: User performs search of invalid city
	    Given User is on Search Page
	    When User enters invalidcity into search field
	    Then Error Message is displayed

	Scenario: User performs search of valid city
	    Given User is on Search Page
	    When User enters validcity into search field
	    Then Weather Reports are displayed