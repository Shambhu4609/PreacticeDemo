@Info1
Feature: Validate the  Guur99 Demo site 

@Adhoc
Scenario: Validate the login functionality with valid credential1
Given User should be on Demo login page
When User enter valid userName and valid Password
Then user click on login button

Scenario: Validate the login functionality with Invalid credential2
Given User should be on Demo login page
When User enter invalid userName and valid Password
Then user click on login button

@Sanity @Somke1 @Reg
Scenario: Validate the login functionality with Invalid credential3
Given User should be on Demo login page
When User enter valid userName and Ivalid Password
Then user click on login button

Scenario: Validate the login functionality with Ivalid credential4
Given User should be on Demo login page
When User enter Invalid userName and Invalid Password
Then user click on login button

