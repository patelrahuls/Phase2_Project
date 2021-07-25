Feature: Product Feature Scenarios 
  Description: This feature will be validate Product cart feauture to SwagLabs Application

  @SingleProductAdd
  Scenario Outline: Verify that user is able to add the single product to cart
    Given User has opened the SwagLabs application
    When User enters "<UserName>" & "<Password>"
    And User clicks on Login button
    Then User should be landed on the Products Page
    And User click on Add to cart button on any one "<product>"
    Then User verifies that "1" products are added to cart
    
    Examples: 
      | UserName      | Password     |product							|
      | standard_user | secret_sauce |Sauce Labs Backpack	|
      
  @MultipleProductAdd
  Scenario: Verify that user is able to add the multiple product to cart
    Given User has opened the SwagLabs application
    When User enters valid credentials
      | Field      | Value        |
      | UserName   | standard_user|
      | Password   | secret_sauce |
    And User clicks on Login button
    Then User should be landed on the Products Page
    And User add product to cart on Products page
      | Field      | Value                 |
      | product1   | Sauce Labs Backpack   |
      | product2   | Sauce Labs Bike Light |
    Then User verifies that "2" products are added to cart