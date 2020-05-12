Feature: Book a product on Dillards shopping application 

Scenario Outline: Order product from dillards application 
	Given User should be on Loging home page 
	When User enters "<userName>" and "<password>" in text box field 
	Then User click on login button 
	When user Search "<tShirt>" in search box 
	Then User select product and click on addToBag 
	And user click checkOout button 
	Then User click ProceedToCheck button 
	And User enters "<emailId>","<firstName>","<lastName>","<mobileNum>","<address>","<pinCode>","<city>"and "<state>" in the address confirmation page 
	Then User enters payment details "<cardNumber>,"<cardHolderNmae>" and "<ccv>" in the payment page 
	Then User confirm the payment and placed the order 
	
	Examples: 
		|userName|password|tShirt|emailId|firstName|lastName|mobileNum|address|pinCode|city|state|cardNumber|cardHolderNmae|ccv|
		|shambhu|java123|Tishirts|abc@gmail.com|sham|raj|5469785266|OMR chennai|842562|chennai|Tamilnadu|46326962679652|shambhu|544|
