package com.stepdenition1;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
@RunWith(Cucumber.class)
@CucumberOptions(features = { "src/test/resources/Resources/FacebookDemo.feature" }, glue = {
		"com.stepDefinition1/StepDefinition1" },dryRun=true,monochrome=true,strict=true)
public class TestRunner1 {

}
