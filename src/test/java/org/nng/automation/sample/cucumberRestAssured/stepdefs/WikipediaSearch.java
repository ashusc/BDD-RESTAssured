// Package
package org.nng.automation.sample.cucumberRestAssured.stepdefs;

//Import Section
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

// REST ASSURED
import static io.restassured.RestAssured.*;
import static io.restassured.matcher.RestAssuredMatchers.*;
import static org.hamcrest.Matchers.*;

// Class
public class WikipediaSearch extends TestCase{

	// ==========================
	// =======[ GLOBALS ]========
	// ==========================
	// Initating a Chrome drier
	//WebDriver driver = new ChromeDriver();
	public String resp = ""; 
    
	// ==========================
	// =======[  STEPS  ]========
	// ==========================
	@Before
	public void set_beore() {
		// Do something before
		
		// No need to setup this, if driver is already in system path
		//System.setProperty("webdriver.chrome.driver", "path_to_driver");
		
		// Open the Application URL
		//driver.get("https://www.wikipedia.org/");
		
		// Maybe, to set the headers for the endpoints
		//given(some-RequestSpecification);
	}
    	
	// Access the Wikipedia
	// User has access of wikipedia as a "Normal User" to search
	@Given("^User has access of wikipedia as a \"([^\"]*)\" to search$")
	public void acccessTheWikipedia(String normalUser) {
		// Get the response body as a String
		//String response = get("https://www.wikipedia.org/").asString();
		String response = get("https://www.wikipedia.org/").getHeaders().toString();
		this.resp = response;
		
		// Direct Assertion [for example JSON in Schema check for any key]
		//get("https://www.wikipedia.org/").then().assertThat().body("something", equalTo(5));
	}

	// Search for the key
	// he request with a search key "Earth"
	@When("^he request with a search key \"([^\"]*)\"$")
	public void user_searchInWikipedia_withSearchKey(String searchKey) throws Throwable {
		System.out.println("RESPONSE [HEADERS] >>> \n\n" + this.resp);
	}
	
	// Get and matcht the result
	// he should see the results related with that search key
	@Then("^he should see the results related with that search key$")
	public void aUsershouldSeeTheResult() throws Throwable {
		System.out.println("EXPECTATION >>> \n\n ...");
	}
	
	 /**
     * @return the suite of tests being tested
     */
    public static Test suite()
    {
    	System.out.println(">>> Test from Wiki search...");
        return new TestSuite( WikipediaSearch.class );
    }
	
	// ====================================================
	// Last 
	// ====================================================
	@After
	public void tearDown() {
		//System.out.println(">>>[TEAR-DOWN] Quiting the driver...");
		//driver.quit();
	}
	
} 
