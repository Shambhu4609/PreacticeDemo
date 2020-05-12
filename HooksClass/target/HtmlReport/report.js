$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Resources/DillardsFeature.feature");
formatter.feature({
  "name": "Book a product on Dillards shopping application",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Order product from dillards application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should be on Loging home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" in text box field",
  "keyword": "When "
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.step({
  "name": "user Search \"\u003ctShirt\u003e\" in search box",
  "keyword": "When "
});
formatter.step({
  "name": "User select product and click on addToBag",
  "keyword": "Then "
});
formatter.step({
  "name": "user click checkOout button",
  "keyword": "And "
});
formatter.step({
  "name": "User click ProceedToCheck button",
  "keyword": "Then "
});
formatter.step({
  "name": "User enters \"\u003cemailId\u003e\",\"\u003cfirstName\u003e\",\"\u003clastName\u003e\",\"\u003cmobileNum\u003e\",\"\u003caddress\u003e\",\"\u003cpinCode\u003e\",\"\u003ccity\u003e\"and \"\u003cstate\u003e\" in the address confirmation page",
  "keyword": "And "
});
formatter.step({
  "name": "User enters payment details \"\u003ccardNumber\u003e,\"\u003ccardHolderNmae\u003e\" and \"\u003cccv\u003e\" in the payment page",
  "keyword": "Then "
});
formatter.step({
  "name": "User confirm the payment and placed the order",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "userName",
        "password",
        "tShirt",
        "emailId",
        "firstName",
        "lastName",
        "mobileNum",
        "address",
        "pinCode",
        "city",
        "state",
        "cardNumber",
        "cardHolderNmae",
        "ccv"
      ]
    },
    {
      "cells": [
        "shambhu",
        "java123",
        "Tishirts",
        "abc@gmail.com",
        "sham",
        "raj",
        "5469785266",
        "OMR chennai",
        "842562",
        "chennai",
        "Tamilnadu",
        "46326962679652",
        "shambhu",
        "544"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Order product from dillards application",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should be on Loging home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_should_be_on_Loging_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"shambhu\" and \"java123\" in text box field",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enters_and_in_text_box_field(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user Search \"Tishirts\" in search box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_Search_in_search_box(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User select product and click on addToBag",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_select_product_and_click_on_addToBag()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user click checkOout button",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_click_checkOout_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click ProceedToCheck button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_ProceedToCheck_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"abc@gmail.com\",\"sham\",\"raj\",\"5469785266\",\"OMR chennai\",\"842562\",\"chennai\"and \"Tamilnadu\" in the address confirmation page",
  "keyword": "And "
});
formatter.match({
  "location": "StepDefinition.user_enters_and_in_the_address_confirmation_page(String,String,String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters payment details \"46326962679652,\"shambhu\" and \"544\" in the payment page",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_enters_payment_details_shambhu_in_the_payment_page(String,String,Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User confirm the payment and placed the order",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_confirm_the_payment_and_placed_the_order()"
});
formatter.result({
  "status": "passed"
});
});