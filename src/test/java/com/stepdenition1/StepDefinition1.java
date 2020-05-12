package com.stepdenition1;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class StepDefinition1 {
	@Given("User should be on facebook home page")
	public void user_should_be_on_facebook_home_page() {

	}

	@When("User enter {string} and {string} in the text box")
	public void user_enter_and_in_the_text_box(String string, String string2) {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("User click on Login button")
	public void user_click_on_Login_button() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("User varify success message")
	public void user_varify_success_message() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("User enters {string} and {string} in the text box")
	public void user_enters_and_in_the_text_box(String string, String string2) {
	}

	@Then("User click Login button")
	public void user_click_Login_button() {
	}

	@Then("User varify error message")
	public void user_varify_error_message() {
	}

	@When("User enter {string},{string} ,{string} and {string} in the text box")
	public void user_enter_and_in_the_text_box(String string, String string2, String string3, String string4) {

	}

	@Then("User click on SignUp button")
	public void user_click_on_SignUp_button() {
	   
	}

	@Then("User varify error messages")
	public void user_varify_error_messages() {
	   
	}

}
