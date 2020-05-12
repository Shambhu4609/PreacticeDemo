@Func1 @Func3
Feature: Validate tariff plan

@Reg @System
Scenario: Add a tariff plan to customer1
	Given user should launch the browser and URL Application 
	Then user click on Add tariff plan to customer link 
	When user provide a valid details 	
	Then user click on submit button and verify
	
	Scenario: Add a tariff plan to customer2
	Given user should launch the browser and URL Application 
	Then user click on Add tariff plan to customer link 
	When user provide a invalid details 	
	Then user click on submit button and verify
	
	@Somke1
	Scenario: Add a tariff plan to customer3
	Given user should launch the browser and URL Application 
	Then user click on Add tariff plan to recharge mobile
	When user provide a valid details 	
	Then user click on submit button and verify
	
	@Somke1 @Sanity
	Scenario: Add a tariff plan to customer4 
	Given user should launch the browser and URL Application 
	Then user click on Add tariff plan to recharge mobile 
	When user provide a invalid details 	
	Then user click on submit button and verify
	
	@Reg
	Scenario: Add a tariff plan to customer5
	Given user should launch the browser and URL Application 
	Then user click on Add tariff plan to recharge postplan 
	When user provide a valid details 	
	Then user click on submit button and verify
	
	@Somke1 @Reg
	Scenario: Add a tariff plan to customer6
	Given user should launch the browser and URL Application 
	Then user click on Add tariff plan to recharge postplan 
	When user provide a invalid details 	
	Then user click on submit button and verify