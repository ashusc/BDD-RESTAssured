// Package
package org.nng.automation.sample.BDD_RESTAssured;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
// Import Section
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

// Class
public class WikipediaSearch {

	// ==========================
	// =======[ GLOBALS ]========
	// ==========================
	// Initating a Chrome drier
	WebDriver driver = new ChromeDriver();
    
	// ==========================
	// =======[  STEPS  ]========
	// ==========================
	@Before
	public void set_beore() {
		// Do something before
		
		// No need to setup this, if driver is already in system path
		//System.setProperty("webdriver.chrome.driver", "path_to_driver");
		
		// Open the Application URL
		driver.get("https://www.wikipedia.org/");
	}
    	
	// Access the Wikipedia
	// User has access of wikipedia as a "Normal User" to search
	@Given("^User has access of wikipedia as a \"([^\"]*)\" to search$")
	public void acccessTheWikipedia(String normalUser) {
	    
	}

	// Search for the key
	// he request with a search key "Earth"
	@When("^he request with a search key \"([^\"]*)\"$")
	public void user_searchInWikipedia_withSearchKey(String searchKey) throws Throwable {
		
	}
	
	// Get and matcht the result
	// he should see the results related with that search key
	@Then("^he should see the results related with that search key$")
	public void aUserAs() throws Throwable {

	}
	
	@After
	public void tearDown() throws Throwable {
		System.out.println(">>>[TEAR-DOWN] Quiting the driver...");
		driver.quit();
	}
	
} 
