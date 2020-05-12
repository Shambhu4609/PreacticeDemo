Feature: Validate the contact number registration of Demo99 Site

@Somke1
Scenario: Verify the mobile number registration1
Given User shoulbe be home page
When User enters the valid mobile details
Then veriy the Mobile number Should be registered

@Sanity @System
Scenario: Verify the mobile number registration2
Given User shoulbe be home page
When User enters the invalid mobile details
Then veriy the Mobile number Should be registered

@Reg
Scenario: Verify the Landline number registration3
Given User shoulbe be home page
When User enters the valid mobile details
Then veriy the Mobile number Should be registered


Scenario: Verify the Landline number registration4
Given User shoulbe be home page
When User enters the invalid mobile details
Then veriy the Mobile number Should be registered

