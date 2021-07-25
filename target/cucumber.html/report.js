$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenarios",
  "description": "  Description: This feature will be validate login feauture to SwagLabs Application",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@LoginFeature"
    }
  ]
});
formatter.scenarioOutline({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@PositiveLogin"
    }
  ]
});
formatter.step({
  "name": "User has opened the SwagLabs application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cUserName\u003e\" \u0026 \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be landed on the Products Page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "standard_user",
        "secret_sauce"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Login Functionality with correct username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@PositiveLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the SwagLabs application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_swaglabs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"standard_user\" \u0026 \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_username_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be landed on the Products Page",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Verify Login Functionality with incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@NegativeLogin"
    }
  ]
});
formatter.step({
  "name": "User has opened the SwagLabs application",
  "keyword": "Given "
});
formatter.step({
  "name": "User enters \"\u003cUserName\u003e\" \u0026 \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.step({
  "name": "User should be able to see error \"\u003cErrorMsg\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password",
        "ErrorMsg"
      ]
    },
    {
      "cells": [
        "negative_user",
        "saucesauce",
        "Epic sadface: Username and password do not match any user in this service"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Verify Login Functionality with incorrect username and password",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@LoginFeature"
    },
    {
      "name": "@NegativeLogin"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the SwagLabs application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_swaglabs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"negative_user\" \u0026 \"saucesauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_username_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User should be able to see error \"Epic sadface: Username and password do not match any user in this service\"",
  "keyword": "Then "
});
formatter.match({
  "location": "LoginSteps.user_should_be_able_to_see_the_error_message(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Products.feature");
formatter.feature({
  "name": "Product Feature Scenarios",
  "description": "  Description: This feature will be validate Product cart feauture to SwagLabs Application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Verify that user is able to add the single product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SingleProductAdd"
    }
  ]
});
formatter.step({
  "name": "User is on the Products Page",
  "keyword": "Given "
});
formatter.step({
  "name": "User click on Add to cart button on any one \"\u003cproduct\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "User verifies that \"1\" products are added to cart",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product"
      ]
    },
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the SwagLabs application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_swaglabs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"standard_user\" \u0026 \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_username_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user is able to add the single product to cart",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SingleProductAdd"
    }
  ]
});
formatter.step({
  "name": "User is on the Products Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsSteps.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click on Add to cart button on any one \"Sauce Labs Backpack\"",
  "keyword": "And "
});
formatter.match({
  "location": "ProductsSteps.user_clicks_addtoCart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that \"1\" products are added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsSteps.user_verifies_cart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User has opened the SwagLabs application",
  "keyword": "Given "
});
formatter.match({
  "location": "LoginSteps.user_has_opened_the_swaglabs_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters \"standard_user\" \u0026 \"secret_sauce\"",
  "keyword": "When "
});
formatter.match({
  "location": "LoginSteps.user_enters_correct_username_something(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User clicks on Login button",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.user_clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Verify that user is able to add the multiple product to cart",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@MultipleProductAdd"
    }
  ]
});
formatter.step({
  "name": "User is on the Products Page",
  "keyword": "Given "
});
formatter.match({
  "location": "ProductsSteps.user_should_be_landed_on_the_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User add product to cart on Products page",
  "rows": [
    {
      "cells": [
        "Sauce Labs Backpack"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bike Light"
      ]
    },
    {
      "cells": [
        "Sauce Labs Bolt T-Shirt"
      ]
    },
    {
      "cells": [
        "Sauce Labs Fleece Jacket"
      ]
    }
  ],
  "keyword": "And "
});
formatter.match({
  "location": "ProductsSteps.user_add_product(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User verifies that \"4\" products are added to cart",
  "keyword": "Then "
});
formatter.match({
  "location": "ProductsSteps.user_verifies_cart(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});