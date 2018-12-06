// PACKAGE
package org.nng.automation.sample.BDD_RESTAssured.runner;

// IMPORT SECTION
//import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
//import cucumber.api.java.en.Given;
//import cucumber.api.java.en.Then;
//import cucumber.api.java.en.When;

// Cucumber and Serenity Configuration 
@RunWith(Cucumber.class)
@CucumberOptions(
	plugin		= {"json:reports/cucumber.json"},
	features		= { "src/test/resources/" }, 
	glue 		= {"org.nng.automation.sample.BDD_RESTAssured" },
	dryRun 		= false,
	tags		= { "@Test1" },
	monochrome 	= true
)

// Runner Class
public class CompletePageRunner {
	
}
