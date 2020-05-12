package com.stepDefinition;

import org.junit.AfterClass;
import org.junit.BeforeClass;

import com.utility.BaseClass1;

import cucumber.api.Scenario;

public class HooksClass extends BaseClass1 {
	@BeforeClass
	private void beforeClass() {
		System.out.println("before");
		chromeBrowserLaunch();
		urlLoad("https://www.facebook.com/");
		
	}
	@AfterClass
	public void afterClass(Scenario sc) {
		System.out.println("after");
		if(sc.isFailed()) {
			sc.embed(takeScreenshot(), "Failed/png");
		}
		else {
			sc.embed(takeScreenshot(), "Pass/png");
		}

	}

}
