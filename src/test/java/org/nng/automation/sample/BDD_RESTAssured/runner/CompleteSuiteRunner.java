// PACKAGE
package org.nng.automation.sample.BDD_RESTAssured.runner;

// IMPORT SECTION
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

// Cucumber and Serenity Configuration 
@RunWith(Cucumber.class)
@CucumberOptions(
	plugin		= {"json:reports/cucumber.json"},
	features	= { "src/test/resources/" }, 
	glue 		= {"org.nng.automation.sample.BDD_RESTAssured" },
	dryRun 		= false,
	tags		= { "@API" },
	monochrome 	= true
)

// Runner Class
public class CompleteSuiteRunner {}
