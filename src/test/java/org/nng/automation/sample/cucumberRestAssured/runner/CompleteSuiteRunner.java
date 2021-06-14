// PACKAGE
package org.nng.automation.sample.cucumberRestAssured.runner;

// IMPORT SECTION
import org.junit.runner.RunWith;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

// Cucumber and Serenity Configuration 
@RunWith(Cucumber.class)
@CucumberOptions(
	plugin		= {"html:reports/html-reports", "usage:reports/cucumber-usage.json", "pretty:target/cucumber-pretty.txt", "json:target/cucumber.json"},
	features	= { "src/test/resources/" }, 
	glue 		= {"org.nng.automation.sample.cucumberRestAssured" },
	dryRun 		= false,
	tags		= { "@API" },
	monochrome 	= true
)

// Runner Class
public class CompleteSuiteRunner {}
