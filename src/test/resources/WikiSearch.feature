@API @Test1
Feature: Wikipedia via REST-Assured
	In order to access the wikipedia search results
	As normal users with a search key
	I should get all the search results for that search key

	@Positive
	Scenario: T001- Simple Search 
		Given User has access of wikipedia as a "Normal User" to search
		When he request with a search key "Earth"
		Then he should see the results related with that search key
  
	@Positive
	Scenario Outline: T002- Simple Search 
		Given User has access of wikipedia as a "Normal User" to search
		When he request with a search key "<SearchKey>"
		Then he should see the results related with that search key
		Examples: 
			| SearchKey  	|
			| Earth			|
			| Mars Planet	|