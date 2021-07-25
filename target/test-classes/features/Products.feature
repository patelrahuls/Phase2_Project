Feature: Product Feature Scenarios 
  Description: This feature will be validate Product cart feauture to SwagLabs Application
  
  Background:
  Given User has opened the SwagLabs application
    When User enters "standard_user" & "secret_sauce"
    And User clicks on Login button

  @SingleProductAdd
  Scenario Outline: Verify that user is able to add the single product to cart
    Given User is on the Products Page
    And User click on Add to cart button on any one "<product>"
    Then User verifies that "1" products are added to cart
    
    Examples: 
      |product							|
      |Sauce Labs Backpack	|
      
  @MultipleProductAdd
  Scenario: Verify that user is able to add the multiple product to cart
    Given User is on the Products Page
    And User add product to cart on Products page
      |Sauce Labs Backpack   		|
      |Sauce Labs Bike Light 		|
      |Sauce Labs Bolt T-Shirt   |
      |Sauce Labs Fleece Jacket	|
    Then User verifies that "4" products are added to cart
   