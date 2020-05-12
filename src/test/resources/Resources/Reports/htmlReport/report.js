$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/resources/Resources/FacebookDemo.feature");
formatter.feature({
  "name": "Login page validation",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Validating login functionality with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should be on facebook home page",
  "keyword": "Given "
});
formatter.step({
  "name": "User enter \"\u003cuserName\u003e\" and \"\u003cpassword\u003e\" in the text box",
  "keyword": "When "
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "Then "
});
formatter.step({
  "name": "User varify success message",
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
        "password"
      ]
    },
    {
      "cells": [
        "shambhu473@gmail.com",
        "9543647348"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Validating login functionality with valid credential",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User should be on facebook home page",
  "keyword": "Given "
});
formatter.match({
  "location": "StepDefinition.user_should_be_on_facebook_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter \"shambhu473@gmail.com\" and \"9543647348\" in the text box",
  "keyword": "When "
});
formatter.match({
  "location": "StepDefinition.user_enter_and_in_the_text_box(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Login button",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_click_on_Login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User varify success message",
  "keyword": "Then "
});
formatter.match({
  "location": "StepDefinition.user_varify_success_message()"
});
formatter.result({
  "status": "passed"
});
});