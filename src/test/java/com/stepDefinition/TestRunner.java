package com.stepDefinition;

import org.junit.AfterClass;
import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

/*@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/Resources" }, glue = {
		"com.stepDefinition" }, monochrome = true, tags = {"not @Info1","not @Func3","not @Func1"})
public class TestRunner {

}
*/

@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/Resources/FacebookDemo.feature" }, glue = {
		"com.stepDefinition" }, monochrome = true, plugin = { "pretty",
				"html:src\\test\\resources\\Resources\\Reports\\htmlReport" }, snippets = SnippetType.CAMELCASE)
public class TestRunner {
	/*
	 * @AfterClass public static void afterClass() {
	 * JVMReport.generateJVMReport(System.getProperty("user.dir")+
	 * "\\HooksClass\\target\\JsonReport.json"); }
	 */

}
