Feature: Login page validation 

	 
Scenario Outline: Validating login functionality with valid credential
Given User should be on facebook home page
	When User enter "<userName>" and "<password>" in the text box 
	Then User click on Login button 
	Then User varify success message 
	
	Examples: 
		|userName|password|
		|shambhu473@gmail.com|9543647348|
		